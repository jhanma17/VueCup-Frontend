<template>
  <div>
    <draggable :list="node"  tag="ul" id="ul" item-key="id">
      <template #item="{element}">
        <li class="tree-list">
            <div class="node" :id="`node_${element.id}`" @contextmenu.prevent="openMenu($event, element)" @click="openFolder(element)">
              <v-icon size="14" v-if="element.type" :color="constants[element.type].color">
                {{ constants[element.type].icon }}
              </v-icon>
              {{ element.label }}
            </div>

            <v-menu 
              v-model="showMenu[element.id]" 
              class="pt-4" 
              :attach="`node_${element.id}`">
              <v-card color="#242424">
                <ul class="menu-list">
                  <li v-if="element.type == 'FOLDER'" @click="addNewDoc({fatherNode: element, type: 'FILE'})"><span>New file</span></li>
                  <li v-if="element.type == 'FOLDER'" @click="addNewDoc({fatherNode: element, type: 'FOLDER'})"><span>New folder</span></li>
                  <li @click="deleteDoc(element)"><span>Delete</span></li>
                </ul>
              </v-card>
            </v-menu>

            <files-tree
            v-if="element.children && element.hidden == false"
            :node="element.children"
            />
          </li>

      </template>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable';


export default {
  components: {
    draggable
  },
  data() {
    return {
      constants: {
        FOLDER: { icon: "mdi-folder", color: "#8b504e" },
        FILE: { icon: "mdi-vuejs", color: "#397771"},
      },
      showMenu: []
    };
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openMenu(e, node){
      e.preventDefault()
        this.showMenu[node.id] = !this.showMenu[node.id]
    },
    openFolder(node) {
      if (node.type === "FOLDER") {
        node.hidden = !node.hidden;
      }
    },

    addNewDoc({fatherNode, type, tree = this.node.children}){
      console.log(type);
      for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === fatherNode.id) {
            if (!tree[i].children) {
              tree[i].children = []
            }
            const id  = Math.floor(Math.random() * (9))
            tree[i].children.push({label: "Node 2.1", hidden: true, id , type: type})
        } else if (tree[i].children) {
          this.addNewDoc({fatherNode, tree: tree[i].children})
        }  
      }
    },

    deleteDoc(childNode, tree = this.node.children){
      for (let i = 0; i < tree.length; i++) {
        if (tree[i].id === childNode.id) {
          tree.splice(i, 1)
        }
        else if (tree[i].children) {
          this.deleteDoc(childNode, tree[i].children)
        }        
      }
    }
  },
  computed: {},
  
};
</script>
<style scoped>
.tree-list {
  margin-left: 20px;
  position: relative;
  color: white;
}

.menu-list{
  width: 200px;
  padding: 8px 0px;
  border-radius: 30px;
}

.menu-list>li>span {
  color: white;
  padding: 2px 15px;
  font-size: 13px;
}
.menu-list li:hover {
  cursor: pointer;
  background-color: #363636;
}

.node {
  font-size: 13px;
  cursor: pointer;
}

.node:hover {
  color: #55a192;
}

.tree-list::before {
  position: absolute;
  top: 10px;
  left: -15px;
  width: 10px;
  height: 1px;
  margin: auto;
  content: "";
  background-color: #506d7f;
}

.tree-list::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -15px;
  width: .5px;
  height: 100%;
  content: "";
  background-color: #506d7f;
}

#ul {
  list-style: none;
}

tree-list-view::selection{
  background-color:none;
}

.document {
  color: green;
}
</style>

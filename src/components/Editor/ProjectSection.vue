<template>
    <div class="mx-4 my-2">
      <div class="d-flex justify-space-between">
        <div>
          <v-icon class="mr-1" size="14">mdi-archive</v-icon>
          <span class="title-tab">Project</span>
        </div>
        <div>
          <v-btn icon flat size="x-small" color="transparent">
            <v-icon color="white">
              mdi-dots-vertical
            </v-icon>
          </v-btn>
          <v-btn icon flat size="x-small" color="transparent">
            <v-icon color="white">
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
      </div>

      <div class="three">
        <!-- <ul>
          <li @contextmenu="setHola" class="folder"><v-icon size="14"> mdi-folder </v-icon> Proyecto
            <ul>
              <li>ola</li>
            </ul>
          </li>
          <li class="folder"> <v-icon size="14"> mdi-folder </v-icon> Proyecto2 </li>
          <li class="folder"> <v-icon size="14"> mdi-folder </v-icon> Proyecto3 </li>
        </ul> -->
        <filesTree :node="treeData"/>
      </div>
      </div>
</template>

<script>
import filesTree from '../tools/filesTree.vue';


export default {
  components: {
    filesTree
  },
  data() {
    return {
      treeData: {
        label: 'Root',
        children: [
          {
            label: 'Node 1',
            children: [
              { label: 'Node 1.1' },
              { label: 'Node 1.2' }
            ]
          },
          {
            label: 'Node 2',
            children: [
              { label: 'Node 2.1' },
              {
                label: 'Node 2.2',
                children: [
                  { label: 'Node 2.2.1' },
                  { label: 'Node 2.2.2' },
                ]
              }
            ]
          }
        ]
      }
    }
  }, 
  methods: {
    setHola(e){
      e.preventDefault();
      console.log('hola');
    }
  },
}
</script>

<style scoped>
.title-tab {
  font-size: 14px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}
.three{
  font-family: 'Roboto Mono', monospace;
  font-size: 11px;
}

li {
  margin-left: 20px;
  position: relative;
  color: white;
}

.folder {
  cursor: pointer;
}

.folder:hover { 
  color: #55a192 ;
}

li::before{
  position: absolute;
  top: 15px;
  left: -15px;
  width: 10px;
  height: 1px;
  margin: auto;
  content: '';
  background-color: #506d7f;
}

li::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -15px;
  width: 1px;
  height: 100%;
  content: '';
  background-color: #506d7f;
}

li:last-child:after {
  height: 15px;
}

ul{
  list-style: none;
}

.document{
  color: green;
}
</style>
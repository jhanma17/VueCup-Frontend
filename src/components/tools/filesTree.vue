<template>
  <div>
    <div v-for="childNode in node.children" :key="childNode.label">
      <ul>
        <li>
          <div class="folder" @click="openFolder(childNode)">
            <v-icon size="14" v-if="childNode.type">
              {{ constants[childNode.type].icon }}
            </v-icon>
            {{ childNode.label }}
          </div>
          <files-tree
            v-if="childNode.children && childNode.hidden == true"
            :node="childNode"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {
        FOLDER: { icon: "mdi-folder" },
        FILE: { icon: "mdi-application-outline" },
      },
    };
  },
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openFolder(node) {
      if (node.type === "FOLDER") {
        node.hidden = !node.hidden;
      }
    },
  },
  computed: {},
};
</script>
<style scoped>
li {
  margin-left: 20px;
  position: relative;
  color: white;
}

.folder {
  font-size: 13px;
  cursor: pointer;
}

.folder:hover {
  color: #55a192;
}

li::before {
  position: absolute;
  top: 10px;
  left: -15px;
  width: 10px;
  height: 1px;
  margin: auto;
  content: "";
  background-color: #506d7f;
}

li::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -15px;
  width: 1px;
  height: 100%;
  content: "";
  background-color: #506d7f;
}

li:last-child:after {
  height: 10px;
}

ul {
  list-style: none;
}

.document {
  color: green;
}
</style>

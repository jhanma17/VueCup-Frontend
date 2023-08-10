<template>
  <div>
    <div v-for="childNode in node.children" :key="childNode.label">
    <ul>
      <li class="folder">
        <v-icon size="14"> mdi-folder </v-icon> {{ childNode.label }}
        <files-tree v-if="childNode.children && childNode.hidden == true" :node="childNode" />
      </li>
    </ul>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
li {
  margin-left: 20px;
  position: relative;
  color: white;
}

.folder {
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

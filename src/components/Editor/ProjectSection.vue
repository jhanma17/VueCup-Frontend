<template>
  <div class="mx-4 my-2">
    <div class="d-flex justify-space-between">
      <div>
        <v-icon class="mr-1" size="14">mdi-archive</v-icon>
        <span class="title-tab">Project</span>
      </div>
      <div>
        <v-btn icon flat size="x-small" :ripple="false" color="transparent">
          <v-icon color="white"> mdi-dots-vertical </v-icon>
        </v-btn>
        <v-btn icon flat size="x-small" :ripple="false" color="transparent">
          <v-icon color="white"> mdi-plus </v-icon>
        </v-btn>
      </div>
    </div>

    <div class="three">
      <filesTree :node="treeData" />
    </div>
  </div>
</template>

<script>
import filesTree from "../tools/filesTree.vue";

export default {
  components: {
    filesTree,
  },
  data() {
    return {
      treeData: [
        {
        label: "Root",
        type: "FOLDER",
        hidden: true,
        id: "232332323",
        children: [
          {
            label: "Node 1",
            type: "FOLDER",
            hidden: true,
            id: "12345678",
            children: [
              { label: "Node 1.1", hidden: true, type: "FILE",  id: "23456789" },
              { label: "Node 1.2", hidden: true, type: "FILE",  id: "34567890" },
            ],
          },
          {
            label: "Node 2",
            type: "FOLDER",
            hidden: true,
            id: "45678901",
            children: [
              { label: "Node 2.1", hidden: true, type: "FILE",  id: "56789012" },
              {
                label: "Node 2.2",
                hidden: true,
                type: "FOLDER",
                id: "67890123",
                children: [
                  { label: "Node 2.2.1", hidden: true, type: "FILE",  id: "78901234" },
                  { label: "Node 2.2.2", hidden: true, type: "FILE",  id: "89012345" },
                ],
              },
            ],
          },
        ],
      },
      ] 
    };
  },
  methods: {
    setHola(e) {
      e.preventDefault();
      console.log("hola");
    },
  },
};
</script>

<style scoped>
.title-tab {
  font-size: 14px !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}
.three {
  font-family: "Roboto Mono", monospace;
  font-size: 11px;
}
</style>
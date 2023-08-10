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
        hidden: true,
        children: [
          {
            label: 'Node 1',
            hidden: true,
            children: [
              { label: 'Node 1.1', hidden: true,},
              { label: 'Node 1.2', hidden: true, }
            ]
          },
          {
            label: 'Node 2',
            hidden: true,
            children: [
              { label: 'Node 2.1' , hidden: true,},
              {
                label: 'Node 2.2',
                hidden: true,
                children: [
                  { label: 'Node 2.2.1', hidden: true,},
                  { label: 'Node 2.2.2', hidden: true },
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
</style>
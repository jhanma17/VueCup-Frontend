<template>
  <div class="component-box">
    <v-img :src="component.icon" aspect-ratio="1" width="50px" class="mx-auto">
    </v-img>

    <span class="text-caption mb-1">
      {{ component.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    component: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.component-box {
  display: flex;
  height: 100px;
  width: 100px;
  border: 1px solid #646464;
  flex-direction: column;
  justify-items: space-around;
  text-align: center;
}
</style>
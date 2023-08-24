<template>
  <component
    :is="element.type"
    :props="element.props"
    :class="highlightedComponent == element.id ? 'highlight' : ''"
    @mouseover.stop="highlightComponent(element.id)"
    @mouseup.stop="placeSelectedComponent()"
    @mousedown.prevent
  >
    <RenderComponent
      v-if="element.children"
      v-for="child in element.children"
      :key="child.id"
      :element="child"
    />
  </component>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import CardTemplate from "@/components/ComponentTemplates/CardTemplate.vue";
import RowTemplate from "@/components/ComponentTemplates/RowTemplate.vue";
import ColTemplate from "@/components/ComponentTemplates/ColTemplate.vue";
import ButtonTemplate from "@/components/ComponentTemplates/ButtonTemplate.vue";
import SpanTemplate from "@/components/ComponentTemplates/SpanTemplate.vue";

export default {
  name: "RenderComponent",
  computed: {
    ...mapState(componentsStore, ["highlightedComponent"]),
  },
  methods: {
    ...mapActions(componentsStore, ["highlightComponent", "placeSelectedComponent"]),
  },
  components: {
    CardTemplate,
    RowTemplate,
    ColTemplate,
    ButtonTemplate,
    SpanTemplate,
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.highlight {
  box-shadow: 0 0 0px 5px rgba(0, 98, 0);
}
</style>
<template>
  <component
    :is="element.type"
    :props="element.props"
    :class="isHighlighted ? 'highlight' : ''"
    @mouseover.stop="highlightComponent(element.id)"
    @click.stop="placeSelectedComponent(), inspectComponent(element)"
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
import TitleTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/TitleTemplate.vue";
import BodyTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/BodyTemplate.vue";
import ParagraphTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/ParagraphTemplate.vue";
import LinkTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/LinkTemplate.vue";
import ImageTemplate from "@/components/ComponentTemplates/BasicComponents/ImageComponents/ImageTemplate.vue";
import CardTemplate from "@/components/ComponentTemplates/CardTemplate.vue";
import RowTemplate from "@/components/ComponentTemplates/RowTemplate.vue";
import ColTemplate from "@/components/ComponentTemplates/ColTemplate.vue";
import ButtonTemplate from "@/components/ComponentTemplates/ButtonTemplate.vue";
import SpanTemplate from "@/components/ComponentTemplates/SpanTemplate.vue";

export default {
  name: "RenderComponent",
  computed: {
    ...mapState(componentsStore, [
      "highlightedComponent",
      "placeComponent",
      "inspectedComponent",
    ]),
    isHighlighted() {
      return (
        (this.highlightedComponent == this.element.id && this.placeComponent) ||
        (this.inspectedComponent && this.inspectedComponent.id == this.element.id)
      );
    },
  },
  methods: {
    ...mapActions(componentsStore, [
      "highlightComponent",
      "placeSelectedComponent",
      "inspectComponent",
    ]),
  },
  components: {
    CardTemplate,
    RowTemplate,
    ColTemplate,
    ButtonTemplate,
    SpanTemplate,
    TitleTemplate,
    BodyTemplate,
    ParagraphTemplate,
    LinkTemplate,
    ImageTemplate,
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
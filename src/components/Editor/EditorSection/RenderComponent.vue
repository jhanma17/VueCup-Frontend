<template>
  <component
    :is="element.type"
    :props="element.props"
    :class="
      highlightedComponent == element.id && placeComponent ? 'highlight' : ''
    "
    @mouseover.stop="highlightComponent(element.id)"
    @mouseup.stop="placeSelectedComponent()"
    @click.stop="inspectComponent(element)"
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
import TitleTemplate from "@/components/ComponentTemplates/BasicComponents/TitleTemplate.vue";
import BodyTemplate from "@/components/ComponentTemplates/BasicComponents/BodyTemplate.vue";
import ParagraphTemplate from "@/components/ComponentTemplates/BasicComponents/ParagraphTemplate.vue";
import LinkTemplate from "@/components/ComponentTemplates/BasicComponents/LinkTemplate.vue";
import CardTemplate from "@/components/ComponentTemplates/CardTemplate.vue";
import RowTemplate from "@/components/ComponentTemplates/RowTemplate.vue";
import ColTemplate from "@/components/ComponentTemplates/ColTemplate.vue";
import ButtonTemplate from "@/components/ComponentTemplates/ButtonTemplate.vue";
import SpanTemplate from "@/components/ComponentTemplates/SpanTemplate.vue";

export default {
  name: "RenderComponent",
  computed: {
    ...mapState(componentsStore, ["highlightedComponent", "placeComponent"]),
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
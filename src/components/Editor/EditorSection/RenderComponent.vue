<template>
  <drop @drop="handleDrop" @dragover="handleDragOver">
    <component
      :is="element.type"
      :props="element.props"
      :class="isHighlighted ? 'highlight' : ''"
      @click.stop="inspectComponent(element)"
      @mousedown.prevent
    >
      <template
        v-if="element.children && isListElement"
      >
        <template v-for="child in element.children" :key="child.id">
          <li>
            <RenderComponent :element="child" />
          </li>
        </template>
      </template>
      <template v-else-if="element.children">
        <RenderComponent
          v-for="child in element.children"
          :key="child.id"
          :element="child"
        />
      </template>
    </component>
  </drop>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { componentsStore } from "@/stores/components";
import CardTemplate from "../../ComponentTemplates/CardTemplate.vue";
import RowTemplate from "../../ComponentTemplates/RowTemplate.vue";
import ColTemplate from "../../ComponentTemplates/ColTemplate.vue";
import ButtonTemplate from "../../ComponentTemplates/ButtonTemplate.vue";
import SpanTemplate from "../../ComponentTemplates/SpanTemplate.vue";
import TitleTemplate from "../../ComponentTemplates/BasicComponents/TextComponents/TitleTemplate.vue";
import BodyTemplate from "../../ComponentTemplates/BasicComponents/TextComponents/BodyTemplate.vue";
import ParagraphTemplate from "../../ComponentTemplates/BasicComponents/TextComponents/ParagraphTemplate.vue";
import LinkTemplate from "../../ComponentTemplates/BasicComponents/TextComponents/LinkTemplate.vue";
import ImageTemplate from "../../ComponentTemplates/BasicComponents/ImageComponents/ImageTemplate.vue";
import ContainerTemplate from "../../ComponentTemplates/BasicComponents/ContainerComponents/ContainerTemplate.vue";
import OrderedListTemplate from "../../ComponentTemplates/BasicComponents/ListComponents/orderedListTemplate.vue";
import UnorderedListTemplate from '../../ComponentTemplates/BasicComponents/ListComponents/unorderedListTemplate.vue';

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
        (this.inspectedComponent &&
          this.inspectedComponent.id == this.element.id)
      );
    },
    isListElement() {
      listTypes = ["OrderedListTemplate", "UnorderedListTemplate"];
      return listTypes.includes(this.element.type);
    },
  },
  methods: {
    ...mapActions(componentsStore, [
      "highlightComponent",
      "placeSelectedComponent",
      "inspectComponent",
    ]),
    handleDragOver(transferData, nativeEvent) {
      nativeEvent.stopPropagation();
      this.highlightComponent(this.element.id);
    },
    handleDrop(transferData, nativeEvent) {
      nativeEvent.stopPropagation();
      this.placeSelectedComponent();
    },
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
    ContainerTemplate,
    OrderedListTemplate,
    UnorderedListTemplate,
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
<template>
  <component
    :is="element.type"
    :props="element.props"
    :class="isHighlighted ? 'highlight' : ''"
    @click.stop="inspectComponent(element)"
    @mousedown.prevent
    v-if="isTextComponent"
  >
    <template v-if="element.children && isListElement">
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
  <drop @drop="handleDrop" @dragover="handleDragOver" :style="dropStyle" v-else>
    <component
      :is="element.type"
      :props="element.props"
      :class="isHighlighted ? 'highlight' : ''"
      @click.stop="inspectComponent(element)"
      @mousedown.prevent
    >
      <template v-if="element.children && isListElement">
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
import CardTemplate from "@/components/ComponentTemplates/CardTemplate.vue";
import RowTemplate from "@/components/ComponentTemplates/RowTemplate.vue";
import ColTemplate from "@/components/ComponentTemplates/ColTemplate.vue";
import ButtonTemplate from "@/components/ComponentTemplates/ButtonTemplate.vue";
import SpanTemplate from "@/components/ComponentTemplates/SpanTemplate.vue";
import RootTemplate from "@/components/ComponentTemplates/RootTemplate.vue";
import TitleTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/TitleTemplate.vue";
import BodyTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/BodyTemplate.vue";
import ParagraphTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/ParagraphTemplate.vue";
import LinkTemplate from "@/components/ComponentTemplates/BasicComponents/TextComponents/LinkTemplate.vue";
import ImageTemplate from "@/components/ComponentTemplates/BasicComponents/ImageComponents/ImageTemplate.vue";
import ContainerTemplate from "@/components/ComponentTemplates/BasicComponents/ContainerComponents/ContainerTemplate.vue";
import OrderedListTemplate from "@/components/ComponentTemplates/BasicComponents/ListComponents/OrderedListTemplate.vue";
import UnorderedListTemplate from "@/components/ComponentTemplates/BasicComponents/ListComponents/UnorderedListTemplate.vue";

export default {
  name: "RenderComponent",
  data() {
    return {
      textTypes: [
        "BodyTemplate",
        "LinkTemplate",
        "ParagraphTemplate",
        "TitleTemplate",
      ],
    };
  },
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
      const listTypes = ["OrderedListTemplate", "UnorderedListTemplate"];
      return listTypes.includes(this.element.type);
    },
    isPercentajeHeight() {
      return this.element.props && this.element.props.heightMode === "%";
    },
    percentajeHeightStyle() {
      return {
        height: `${this.element.props.height * 5}%`,
      };
    },
    isPercentajeWidth() {
      return this.element.props && this.element.props.widthMode === "%";
    },
    percentajeWidthStyle() {
      return {
        width: `${this.element.props.width * 5}%`,
      };
    },
    isTextComponent() {
      return this.textTypes.includes(this.element.type);
    },
    textHeightStyle() {
      return {
        height: `auto`,
        display: "inline-block",
      };
    },
    dropStyle() {
      let style = {};

      if (this.isPercentajeHeight) {
        style = {
          ...style,
          ...this.percentajeHeightStyle,
        };
      }

      if (this.isPercentajeWidth) {
        style = {
          ...style,
          ...this.percentajeWidthStyle,
        };
      }

      if (this.isTextComponent) {
        style = {
          ...style,
          ...this.textHeightStyle,
        };
      }

      return style;
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
    RootTemplate,
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
  box-shadow: inset 0 0 0px 3px rgba(0, 98, 0);
}
</style>
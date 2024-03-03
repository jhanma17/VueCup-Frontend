<template>
  <ol class="no-selection" :style="style">
    <slot></slot>
  </ol>
</template>

<script>
import OrderedListProps from './OrderedListProps';

export default {
  name: "OrderedListTemplate",
  props: {
    props: {
      type: Object,
      required: false,
      default: () => {
        return {
          ...OrderedListProps,
        };
      },
    },
  },
  computed: {
    style() {
      return {
        marginTop: this.props.marginTop + "px",
        marginBottom: this.props.marginBottom + "px",
        marginRight: this.props.marginRight + "px",
        marginLeft: this.props.marginLeft + "px",
        paddingTop: this.props.paddingTop + "px",
        paddingBottom: this.props.paddingBottom + "px",
        paddingRight: this.props.paddingRight + "px",
        paddingLeft: this.props.paddingLeft + "px",
      };
    },
  },
};
</script>

<style scoped>
.no-selection {
  user-select: none;
}
</style>
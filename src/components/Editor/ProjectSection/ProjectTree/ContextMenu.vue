<template>
  <div>
    <ul
      :id="elementId"
      :class="menuClasses"
      v-click-outside="onClickOutside"
    >
      <li
        v-for="(option, index) in options"
        :key="index"
        @click.stop="optionClicked(option)"
        class="vue-simple-context-menu__item"
        :class="[
          option.class,
          option.type === 'divider' ? 'vue-simple-context-menu__divider' : '',
        ]"
      >
        <span>{{ option.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";

export default {
  name: "VueSimpleContextMenu",
  props: {
    elementId: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  directives: {
    "click-outside": vClickOutside.directive,
  },
  data() {
    return {
      item: null,
      active: false,
    };
  },
  computed: {
    menuClasses() {
      return {
        "vue-simple-context-menu": true,
        "vue-simple-context-menu--active": this.active,
      };
    },
  },
  methods: {
    showMenu(event, item) {
      this.active = true;
      this.item = item;

      const menu = document.getElementById(this.elementId);
      menu.style.left = `${event.pageX}px`;
      menu.style.top = `${event.pageY}px`;
    },
    hideContextMenu() {
      this.active = false;
    },
    onClickOutside() {
      this.hideContextMenu();
    },
    optionClicked(option) {
      this.hideContextMenu();
      this.$emit("option-clicked", {
        item: this.item,
        option: option,
      });
    },
  },
};
</script>

<style>
.vue-simple-context-menu {
  background-color: #ecf0f1;
  border-bottom-width: 0px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(51, 51, 51, 0.2);
  display: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  z-index: 1000000;
}

.vue-simple-context-menu--active {
  display: block !important;
  position: fixed;
}

.vue-simple-context-menu__item {
  align-items: center;
  color: #333;
  cursor: pointer;
  display: flex;
  padding: 5px 15px;
}

.vue-simple-context-menu__item:hover {
  background-color: #007aff;
  color: #fff;
}

.vue-simple-context-menu__divider {
  background-clip: content-box;
  background-color: #a3b1bd;
  box-sizing: content-box;
  height: 2px;
  padding: 4px 0;
  pointer-events: none;
}

.vue-simple-context-menu li:first-of-type {
  margin-top: 4px;
}

.vue-simple-context-menu li:last-of-type {
  margin-bottom: 4px;
}
</style>
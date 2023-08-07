<template>
  <div class="editor-container">
    <div class="left-side">
      <div class="upper-side">
        <ScreensSection />
      </div>

      <div class="lower-side">
        <ProjectSection />
      </div>
    </div>

    <div class="center-side">
      <EditorSection />
    </div>

    <div class="right-side">
      <InspectorSection />
    </div>
  </div>
</template>

<script>
import ScreensSection from "../components/Editor/ScreensSection.vue";
import ProjectSection from "../components/Editor/ProjectSection.vue";
import EditorSection from "../components/Editor/EditorSection.vue";
import InspectorSection from "../components/Editor/InspectorSection.vue";

export default {
  components: {
    ScreensSection,
    ProjectSection,
    EditorSection,
    InspectorSection
  }
}
</script>

<style scoped>
.editor-container {
  height: calc(100vh - 64px);
  width: 100%;
  background-color: #181818;
  color: #fff;
}

.left-side {
  position: absolute;
  height: calc(100% - 20px);
  width: calc(25% - 15px);
  top: 10px;
  left: 10px;
}

.center-side {
  position: absolute;
  height: calc(100% - 20px);
  width: calc(50% - 10px);
  top: 10px;
  left: calc(25% + 5px);
  background-color: #242424;
  border-radius: 5px;
}

.right-side {
  position: absolute;
  height: calc(100% - 20px);
  width: calc(25% - 20px);
  top: 10px;
  left: calc(75% + 5px);
  background-color: #242424;
  border-radius: 5px;
}

.upper-side {
  position: absolute;
  top: 0;
  height: calc(50% - 5px); /* Ocupar la mitad de la altura del contenedor */
  width: 100%;
  background-color: #242424;
  border-radius: 5px;
}

.lower-side {
  position: absolute;
  bottom: 0;
  height: calc(50% - 5px); /* Ocupar la mitad de la altura del contenedor */
  width: 100%;
  background-color: #242424;
  border-radius: 5px;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.lower-side::-webkit-scrollbar {
  display: none;
}
</style>
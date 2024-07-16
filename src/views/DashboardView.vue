<template>
  <div class="main-dashboard">
    <nav class="dashboard-sidebar">
      <div class="sidebar-content">
        <v-row class="ma-0 mx-6">
          <v-text-field
            class="sidebar-search"
            variant="solo-filled"
            placeholder="Search..."
            rounded="lg"
            density="compact"
          >
            <template v-slot:append-inner>
              <v-icon>mdi-magnify</v-icon>
            </template>
          </v-text-field>
        </v-row>

        <v-row class="ma-0">
          <v-list density="compact" class="dashboard-list" nav>
            <v-list-item
              value="projects"
              class="px-6 no-selected-item"
              active-class="selected-item"
            >
              <v-list-item-title>Projects</v-list-item-title>
            </v-list-item>
            <v-list-item
              value="library"
              class="px-6 no-selected-item"
              active-class="selected-item"
            >
              <v-list-item-title>Library</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-row>
      </div>
      <div class="sidebar-profile-section">
        <v-row class="ma-0" align="center">
          <v-col cols="3">
            <v-avatar
              color="black"
              size="48"
              density="comfortable"
              class="ma-2"
            >
              <span class="font-weight-bold"> JM </span>
            </v-avatar>
          </v-col>

          <v-col cols="9" class="profile-title">
            <span class="text-white text-subtitle-1 profile-title">
              Jhan Mario Bolivar Peña
            </span>
          </v-col>
        </v-row>
      </div>
    </nav>

    <div class="dashboard-content"></div>
  </div>
</template>

<script>
export default {
  name: "DashboardView",
  data() {
    return {};
  },
};
</script>

<style>
.main-dashboard {
  display: grid;
  height: 100vh;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: 1fr;
}

.dashboard-sidebar {
  grid-column: 1 / span 1;
  grid-row: 1 / span 2;
  padding-top: 1.4rem;
  margin-right: 1.4rem;
  border-right: 1px solid #2e3434;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-content {
  display: grid;
  grid-template-rows: repeat(4, auto) 1fr;
  gap: 1.5rem;
  height: 100%;
  overflow-y: auto;
}

.dashboard-content {
  grid-column: 2 / span 2;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-rows: 1fr auto;
}

.sidebar-search {
  height: 3.5rem;
}

.dashboard-list {
  width: 100% !important;
  background: none;
}

.no-selected-item {
  color: grey;
}

.selected-item {
  color: #7efff5;
}

.sidebar-profile-section {
  border-top: 1px solid #2e3434;
}

.profile-title {
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
}
</style>
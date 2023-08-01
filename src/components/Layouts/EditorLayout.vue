<template>
  <v-layout>
    <v-app-bar color="#242424">
      <template v-slot:prepend>
        <img src="@/assets/Images/VueCupLogo.png" alt="VueCup" height="50" />
      </template>

      <v-app-bar-title>VueCup</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
</script>

<style></style>
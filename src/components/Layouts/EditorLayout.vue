<template>
  <v-layout>
    <v-app-bar color="#181818">
      <template v-slot:prepend>
        <img src="@/assets/Images/VueCupLogo.png" alt="VueCup" height="50" />
      </template>

      <v-app-bar-title>VueCup</v-app-bar-title>
    </v-app-bar>
  </v-layout>

  <router-view></router-view>
</template>

<script>
</script>

<style></style>
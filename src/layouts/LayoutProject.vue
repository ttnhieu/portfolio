<template>
  <v-app id="project-app">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'LayoutProject',
})
export default class LayoutProject extends Vue {}
</script>

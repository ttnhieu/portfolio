<template>
  <v-app id="app">
    <LayoutDefault v-if="this.$route.meta.isDefaultLayout" />
    <LayoutProject v-else />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';

@Component({
  name: 'App',
  components: {
    'LayoutDefault': LazyLoadService.loadLayout('LayoutDefault'),
    'LayoutProject': LazyLoadService.loadLayout('LayoutProject'),
  },
})
export default class App extends Vue {
  mounted() {
    //
  }
}
</script>

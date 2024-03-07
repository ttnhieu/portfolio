<template>
  <v-container fluid class="pa-0">
    <Banner />
    <About />
    <Skills />
    <Projects />
    <Experience />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';

@Component({
  name: 'HomePage',
  components: {
    Banner: LazyLoadService.loadComponent('banner/Banner'),
    About: LazyLoadService.loadComponent('about/About'),
    Skills: LazyLoadService.loadComponent('skills/Skills'),
    Projects: LazyLoadService.loadComponent('projects/Projects'),
    Experience: LazyLoadService.loadComponent('experience/Experience'),
  },
})
export default class HomeView extends Vue {}
</script>

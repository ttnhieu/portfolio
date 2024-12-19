<template>
  <div class="home-skills s-container px-0 pt-0" id="skill">
    <div class="page-highlight s-container--spacing px-lg-16 px-0">
      <HeaderPageHorizontal
        title="My Skills"
        subTitle="What Can I Do"
        description="Here are some of my skills, on which I have worked."
      />

      <v-row
        no-gutters
        class="home-skills__list"
      >
        <v-col
          v-for="(item, index) in skills"
          sm="4" lg="3"
          cols="6"
          class="px-4 mb-10 mb-lg-8 home-skills__item d-flex align-center"
          data-aos="fade-up"
          :key="item.id"
          :data-aos-delay="aosDelayTime(index)"
          :data-aos-duration="1000"
        >
          <img :src="item.image_url" alt="">

          <div class="home-skills__item-title ml-3">
            {{ item.name }}
          </div>
        </v-col>
      </v-row>
      <div class="shape">
        <img src="@/assets/images/vector4.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { Product } from '@/shared/models/product';
import { aosDelay } from '@/shared/utils/helper';

@Component({
  name: 'SkillsComponent',
  components: {
    HeaderPageHorizontal: LazyLoadService.loadComponent('HeaderPageHorizontal'),
  },
})
export default class SkillsComponent extends Vue {
  time = 1000;
  products: Product[] = [];
  skills = [
    {
      id: 1,
      name: 'HTML',
      image_url: require('@/assets/images/skills/skill-html.svg'),
    },
    {
      id: 2,
      name: 'CSS',
      image_url: require('@/assets/images/skills/skill-css.svg'),
    },
    {
      id: 3,
      name: 'SASS',
      image_url: require('@/assets/images/skills/skill-scss.svg'),
    },
    {
      id: 4,
      name: 'Bootstrap',
      image_url: require('@/assets/images/skills/skill-bootstrap.svg'),
    },
    {
      id: 5,
      name: 'Tailwind',
      image_url: require('@/assets/images/skills/skill-tailwind.svg'),
    },
    {
      id: 6,
      name: 'Ant design',
      image_url: require('@/assets/images/skills/skill-ant.svg'),
    },
    {
      id: 7,
      name: 'Vuetify',
      image_url: require('@/assets/images/skills/skill-vuetify.svg'),
    },
    {
      id: 8,
      name: 'Javascript',
      image_url: require('@/assets/images/skills/skill-js.svg'),
    },
    {
      id: 9,
      name: 'Typescript',
      image_url: require('@/assets/images/skills/skill-ts.svg'),
    },
    {
      id: 10,
      name: 'Nodejs',
      image_url: require('@/assets/images/skills/skill-node.svg'),
    },
    {
      id: 11,
      name: 'Angular',
      image_url: require('@/assets/images/skills/skill-angular.svg'),
    },
    {
      id: 12,
      name: 'Vuejs',
      image_url: require('@/assets/images/skills/skill-vue.svg'),
    },
    {
      id: 13,
      name: 'Nuxtjs',
      image_url: require('@/assets/images/skills/skill-nuxt.svg'),
    },
    {
      id: 14,
      name: 'Git',
      image_url: require('@/assets/images/skills/skill-git.svg'),
    },
  ];

  aosDuration(index: number) {
    return 500 * index;
  }

  aosDelayTime(index: number) {
    const arr = aosDelay(this.products.length);
    return arr[index];
  }
}
</script>
<style lang="scss">
@import './Skills.scss';
</style>

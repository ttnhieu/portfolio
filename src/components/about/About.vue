<template>
  <div class="home-about s-container s-container--spacing px-0" id="about">
    <v-row
      no-gutters
      class="py-lg-10 py-0"
    >
      <v-col
        lg="6"
        cols="12"
        class="px-4 mb-10 mb-lg-0"
      >
        <div class="home-about__item home-about__left d-flex align-end">
          <div class="year">
            <h3>{{ yearEx }}</h3>
            <span class="year-rounded">
              <img src="@/assets/images/flower.png" alt="">
            </span>
          </div>

          <div class="experience">
            <h3>+</h3>
            <p>years experience</p>
            <span class="shape">
              <img src="@/assets/images/dots.png" alt="">
            </span>
            <span class="shape-circle">
              <img src="@/assets/images/icon1.svg" alt="">
            </span>
          </div>
        </div>
      </v-col>

      <v-col
        lg="6"
        cols="12"
        class="px-4"
      >
        <div class="home-about__item home-about__right">
          <div class="home-about__title">
            <span>Have A Nice Day!</span>
            <h3 class="title-font">I'm a Frontend Developer.</h3>
          </div>

          <p class="home-about__text">
            I love the challenge of finding creative solutions to problems, and I enjoy collaborating with teams to achieve great results.
          </p>
          <p class="home-about__text">
            I am dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions for my clients.
          </p>
          <p class="home-about__text mb-0">
            I pay great attention to detail in the design and development of my projects. My ultimate goal is to create software that is both user-friendly and impactful in achieving the client's objectives.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import moment from 'moment';

@Component({
  name: 'AboutComponent',
})
export default class AboutComponent extends Vue {
  get yearEx() {
    return moment().year() - 2019;
  }
}
</script>
<style lang="scss">
@import './About.scss';
</style>

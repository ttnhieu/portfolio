<template>
  <div class="home-banner" id="home">
    <div class="home-banner__wrp"></div>
    <div class="s-container">
      <div class="home-banner__ctn">
        <div class="home-banner__intro">
          <h3 class="home-banner__name">
            <span>I</span>
            AM <br />
            Hieu.
          </h3>

          <span class="home-banner__welcome" id="type"></span>
        </div>

        <div class="home-banner__avatar"></div>
      </div>
    </div>
    <span class="shape shape-1">
      <img src="@/assets/images/icon5.svg" class="animate-circle" alt="" />
    </span>
    <span class="shape shape-2">
      <img src="@/assets/images/icon7.svg" alt="" />
    </span>
    <span class="shape shape-3">
      <img src="@/assets/images/icon3.svg" alt="" />
    </span>
    <span class="shape shape-4">
      <img src="@/assets/images/icon6.svg" class="animate-circle" alt="" />
    </span>
    <span class="shape shape-5">
      <img src="@/assets/images/icon1.svg" alt="" />
    </span>
    <span class="shape shape-6">
      <img src="@/assets/images/icon5.svg" class="animate-circle" alt="" />
    </span>
    <span class="shape shape-7">
      <img src="@/assets/images/icon2.svg" alt="" />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  name: 'BannerComponent',
})
export default class BannerComponent extends Vue {
  mounted() {
    this.initTypeWriter();
  }

  initTypeWriter() {
    const widthSm = document.documentElement.clientWidth;
    const app = document.getElementById('type');
    const typewriter = new Typewriter(app, {
      loop: true,
    });

    if (widthSm > 480) {
      setTimeout(() => {
        this.startTypeWriter(typewriter);
      }, 2000);
    } else {
      this.startTypeWriter(typewriter);
    }
  }

  startTypeWriter(typewriter: any) {
    typewriter
      .typeString("I'm a Front-end Developer")
      .pauseFor(2500)
      .deleteAll()
      .typeString('I Build Website')
      .pauseFor(2500)
      .deleteAll(7)
      .typeString('I Solve Problems')
      .pauseFor(2500)
      .start(500);
  }
}
</script>
<style lang="scss">
@import './Banner.scss';
</style>

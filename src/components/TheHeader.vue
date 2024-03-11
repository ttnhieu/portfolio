<template>
  <v-app-bar
    absolute
    color="#fcf9f7"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
    class="header px-md-0 px-4"
  >
    <img src="@/assets/images/Logo.svg" alt="logo">

    <v-spacer></v-spacer>

    <v-tabs
      align-with-title
      class="menu-pc"
    >
      <v-tab
        v-for="item in menu"
        :key="item.title"
        :id="`${item.id}`"
      >
        <a :href="item.id" class="d-flex justify-center align-center">
          {{ item.title }}
        </a>
      </v-tab>
    </v-tabs>
    <v-btn
      icon
      class="menu-toggle"
      @click.stop="toggleDrawer()"
    >
      <!-- <v-icon>
        {{ icon }}
      </v-icon> -->
      <v-icon v-show="!displayMenuSm">
        mdi-menu
      </v-icon>

      <v-icon v-show="displayMenuSm">
        mdi-close
      </v-icon>
    </v-btn>

    <!-- <v-app-bar-nav-icon class="btn-toggle" @click.stop="toggleDrawer()"></v-app-bar-nav-icon> -->
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { MENU } from '@/shared/constants/common';

@Component({
  name: 'TheHeaderComponent',
})
export default class TheHeaderComponent extends Vue {
  @Prop() drawer: any;
  navigationDrawer: any;
  menu = MENU;
  displayMenuSm: boolean = false;

  features = [
    {
      icon: 'mdi-magnify',
    },
    {
      icon: 'mdi-cart-outline'
    },
    {
      icon: 'mdi-account-outline'
    },
  ];

  get icon() {
    return this.displayMenuSm ? 'mdi-close' : 'mdi-menu';
  }

  @Watch('drawer')
  watchDrawer(newVal: any, oldVal: any) {
    this.navigationDrawer = newVal;
  }

  toggleDrawer() {
    // this.navigationDrawer = !this.navigationDrawer
    this.displayMenuSm = !this.displayMenuSm;
    this.$emit('toggle', this.navigationDrawer);
  }
}
</script>
<style lang="scss">
.header {
  width: 100%;
  right: unset !important;
  border-bottom: 1px solid rgba(171, 84, 41, .1) !important;
  box-shadow: none !important;
  transition: all .3s ease;

  img {
    height: 30px;
  }

  .btn-toggle {
    display: none;
  }

  .v-tab {
    padding: 0;

    a {
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: var(--black);
      padding: 0 16px;
      font-weight: 500;
      transition: all .3s ease;
    }

    &.active {
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        bottom: 0;
        margin: 0 !important;
        position: absolute;
        background: var(--v-primary-base);
      }

      a {
        color: var(--v-primary-base);
      }
    }
  }

  .v-tabs-slider-wrapper {
    display: none;
  }

  .menu-toggle {
    display: none;
    transition: all 0.9s ease;

    .v-icon {
      transition: all .9s ease;
    }
  }

  @media (max-width: 959px) {
    .menu-pc {
      display: none;
    }

    .btn-toggle {
      display: block;
    }

    .menu-toggle {
      display: block;
    }
  }

}
</style>

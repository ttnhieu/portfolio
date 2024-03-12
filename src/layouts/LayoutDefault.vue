<template>
  <v-app id="app">
    <div class="cover">
      <div class="animate_content">
        <v-card>
          <TheHeader @toggle="toggle" :drawer="drawer" />

          <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto ctn-wrp"
          >
            <div class="s-wrapper">
              <router-view />
            </div>
            <div>

            </div>
            <TheFooter />
          </v-sheet>
          <div id="scroll-top">
            <a href="#" @click="scrollTotop">
              <span class="text">TO TOP</span>
            </a>
            <div class="line-container">
              <span class="line-bar"></span>
            </div>
          </div>
        </v-card>

        <div class="menu-sm" v-show="showHeaderSm">
          <v-list dense>
            <v-list-item
              v-for="item in menu"
              :key="item.title"
              link
              :id="`${item.id}_sm`"
            >
              <a :href="item.id" >
                {{ item.title }}
              </a>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { MENU } from '@/shared/constants/common';

@Component({
  name: 'LayoutDefault',
  components: {
    'TheHeader': LazyLoadService.loadComponent('TheHeader'),
    'TheFooter': LazyLoadService.loadComponent('TheFooter'),
  },
})
export default class LayoutDefault extends Vue {
  drawer = null;
  menu = MENU;
  progress: number = 0;
  showHeaderSm: boolean = false;

  mounted() {
    setTimeout(() => {
      const homeMenu: any = document.getElementById('#home');
      if (homeMenu) {
        homeMenu.classList.add('active');
      }

      const homeMenuSm: any = document.getElementById('#home_sm');
      if (homeMenuSm) {
        homeMenuSm.classList.add('active');
      }

    }, 300);

    window.addEventListener('scroll', function(event) {
      const scrollEl: any = document.querySelector('#scrolling-techniques-7');

      /* Add animate for header when scroll */
      const headerEl: any = document.querySelector('.header');
      const lineBarEl: any = document.querySelector('.line-bar');
      const scollTopEl: any = document.querySelector('#scroll-top');

      const height = scrollEl.scrollHeight - scrollEl.clientHeight;
      const scrolled = (scrollEl.scrollTop / height) * 100;
      lineBarEl.style.height = scrolled + '%';

      if (scrollEl.scrollTop > 64) {
        headerEl.classList.add('header-animate');
        scollTopEl.style.right = '25px';
      } else {
        scollTopEl.style.right = '-10px';
      }

      /* Active menu when scroll */
      const headerHeigh = 64;

      const activeMenu = (hash: string) => {
        const itemEL: any = document.querySelector(hash);
        const itemMenu: any = document.getElementById(hash);
        const itemMenuSm: any = document.getElementById(`${hash}_sm`);
        const itemOffsetTop = itemEL.offsetTop - headerHeigh;
        const ItemMax = itemOffsetTop + itemEL.scrollHeight;

        if (scrollEl.scrollTop >= itemOffsetTop && scrollEl.scrollTop < ItemMax) {
          itemMenu.classList.add('active');
          itemMenuSm.classList.add('active');
        } else {
          itemMenu.classList.remove('active');
          itemMenuSm.classList.remove('active');
        }
      }

      MENU.forEach((item) => {
        activeMenu(item.id);
      });
    }, true);
  }

  toggle(e: any) {
    // this.drawer = e;
    this.showHeaderSm = !this.showHeaderSm;
  }

  scrollTotop() {
    const el: any = document.querySelector('#scrolling-techniques-7');
    el.scrollTop = 0;
  }
}
</script>
<style lang="scss">
#app {
  background: #0e0e0e;
}

#scroll-top {
  position: absolute;
  bottom: 25px;
  right: -10px;
  transition: all 0.3s ease;
  z-index: 3;

  .text {
    text-decoration: none;
    color: #000;
    font-size: 13px;
    transform: rotate(90deg);
    text-transform: uppercase;
    transform-origin: left;
    white-space: nowrap;
    position: absolute;
    bottom: 150px;
    left: 0;
    font-weight: 500;
  }

  .line {
    &-container {
      background-color: rgba(0,0,0,.08);
      bottom: 0;
      height: 100px;
      left: 0;
      position: absolute;
      transition: all .3s ease;
      transform: rotate(180deg);
      width: 1px;
    }

    &-bar {
      background-color: rgba(0,0,0,.4);
      bottom: 0;
      height: 0%;
      left: 0;
      position: absolute;
      width: 1px;
    }
  }
}

.v-list-item {
  padding: 0;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--black) !important;
    padding: 0 16px;
  }
}

.menu-sm {
  position: absolute;
  left: 0;
  top: 56px;
  width: 100%;
  z-index: 2;
  transition: all .9s ease;

  .v-list {
    padding: 0;

    &-item {
      background: #fff;
      font-weight: 500;
      padding: 0 15px;

       &.active {
        background: var(--bg-main);
      }
    }
  }

  @media (min-width: 960px) {
    display: none;
  }
}

@media (min-width: 960px) {
  .animate_content {
    animation: animateOpen 3s ease;
  }
}
</style>

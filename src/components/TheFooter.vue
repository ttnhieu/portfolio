<template>
  <v-footer padless id="contact">
    <v-card flat tile class="footer lighten-1 w-100">
      <div class="s-container">
        <h3
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          class="title-font"
        >
          I want to hear from <br />you please
          <a href="javascript:void(0);" class="contact_link">contact me!</a>
        </h3>
        <div
          class="d-flex align-end contact"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <span class="contact-item email">ttn.hieu.44@gmail.com</span>
          <div class="contact-item text-lg-center">
            <img class="icon" src="@/assets/images/vector3.svg" alt="" />
          </div>
          <div class="contact-item socials">
            <div class="socials-list">
              <a
                class="socials-item"
                href="https://www.linkedin.com/in/ttnhieu/"
                target="_blank"
              >
                <icon-linkedin />
              </a>
              <span class="socials-item">
                <icon-facebook />
              </span>
              <span class="socials-item">
                <icon-instagram />
              </span>
            </div>
            <p class="mb-0 text-lg-center">
              © {{ new Date().getFullYear() }} Hieu Tran.
            </p>
            <!-- <p class="mb-0 text-lg-center">Made with ❤ by Hieu</p> -->
          </div>
        </div>
      </div>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';

@Component({
  name: 'TheFooterComponent',
  components: {
    IconFacebook,
    IconLinkedin,
    IconInstagram,
  },
})
export default class TheFooterComponent extends Vue {}
</script>
<style lang="scss">
.theme--light.v-sheet.footer {
  padding-top: 400px;
  padding-bottom: 80px;
  background-image: url('../assets/images/vector.svg'),
    url('../assets/images/vector2.svg') !important;
  background-position: -30px bottom, calc(100% + 60px) bottom;
  background-color: var(--extra-color) !important;
  color: #fff !important;
  width: 100%;

  h3 {
    font-weight: 700;
    font-size: 55px;
    color: #fff;
    line-height: 1.2;
    text-transform: capitalize;
    margin-bottom: 70px;

    a {
      text-decoration: none;
    }
  }

  .contact-item {
    width: calc(100% / 3);
  }

  .email {
    color: #fff;
    opacity: 0.5;
    font-size: 30px;
    transition: all 0.3s ease;
  }

  .icon {
    width: 32px;
    height: 32px;
  }

  .socials {
    &-list {
      display: flex;
      justify-content: space-between;
      padding: 0 80px;
      margin-bottom: 30px;
    }

    &-item {
      opacity: 0.3;
      height: 30px;
      transition: all 0.3s ease;

      .c-icon {
        font-size: 30px;
        color: #fff;
      }

      &:hover {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1263px) {
    h3 {
      font-size: 40px;
    }

    .contact {
      flex-direction: column;

      &-item {
        width: 100%;
      }
    }

    .email {
      font-size: 23px;
    }

    .icon {
      display: none;
    }

    .socials {
      margin-top: 20px;

      &-list {
        padding: 0;
        justify-content: unset;
        margin-bottom: 20px;
      }

      &-item {
        margin-right: 15px;

        .c-icon {
          font-size: 25px;
        }
      }
    }
  }

  @media (max-width: 479px) {
    background-position: 100% bottom, calc(100% + 70%) bottom;
  }
}
</style>

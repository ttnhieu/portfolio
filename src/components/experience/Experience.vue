<template>
  <div class="home-experience s-container px-0 pt-0" id="experience">
    <div class="page-highlight s-container--spacing px-lg-16 px-0">
      <HeaderPageHorizontal
        title="Experience"
        subTitle="Experience Timeline"
        description="I've had the opportunity to expand my knowledge and skills through projects. Here's a glimpse of the things I've completed along my learning journey."
      />
      <div class="timeline px-4">
        <span class="timeline__line"></span>
        <div class="timeline__list">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            class="timeline__item mb-10"
            v-for="(item, index) in experiences"
            :key="item.id"
          >
            <div class="timeline__detail">
              <div class="timeline__text">
                <h3>{{ item.title }}</h3>
                <span>{{ item.sub_title }}</span>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </div>

            <div class="timeline__icon">
              <span>{{ index + 1 }}</span>
            </div>

            <div class="timeline__year">
              <span>{{ item.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import  AOS  from '@/assets/js/aos';

@Component({
  name: 'ExperienceComponent',
  components: {
    HeaderPageHorizontal: LazyLoadService.loadComponent('HeaderPageHorizontal'),
  },
})
export default class ExperienceComponent extends Vue {
  experiences: any[] = [];
  data = [
    {
      id: 1,
      title: 'Frontend Developer',
      sub_title: 'DGWA',
      description:'Development of new features, Maintenance of previous features and functionalities.',
      time: 'Jun 2023 - Present',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      sub_title: 'Neolab',
      description:'Development of websites, templates and new features based on VueJS, NuxtJS and TypeScript, JavaScript, HTML and SCSS.',
      time: 'Apr 2020 - Jun 2023',
    },
    {
      id: 3,
      title: 'Frontend Developer',
      sub_title: 'Neolab',
      description:'Conception and frontend development of the business model. \nProgramming with Angular Framework and TypeScript, Design with HTML and SCSS.',
      time: 'Jun 2018 - Apr 2020',
    },
    {
      id: 4,
      title: 'Web Development Intern',
      sub_title: 'Neolab',
      description:'Developed Responsive Static Website. \nTechnologies: HTML, CSS, Bootstrap, JQuery, Git, Bitbucket.',
      time: 'Dec 2017 - Jun 2018',
    },
  ];

  created() {
    this.experiences = this.data;
  }

  mounted() {
    AOS.init()
    document.addEventListener('scroll', function (event) {
      AOS.refresh();
    }, true /*Capture event*/);
  }
}
</script>
<style lang="scss">
@import './Experience.scss';
</style>

<template>
  <div class="home-projects s-container s-container--spacing px-0" id="project">
    <div class="page-title mb-12 px-4">
      <h3 class="mb-5 title-font">Latest Projects</h3>
      <!-- <p class="mb-0">This is a list of previous projects of work.</p> -->
      <p class="mb-0">Here are some of my selected projects worth sharing.</p>
    </div>

    <v-row no-gutters>
      <v-col
        v-for="(item, index) in products"
        data-aos="fade-up"
        :key="item.id"
        :data-aos-delay="aosDelayTime(index)"
        :data-aos-duration="1000"
        sm="6"
        lg="4"
        cols="12"
        class="px-4 mb-10"
      >
        <CardPost :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import LazyLoadService from '@/shared/utils/lazy-load.service';
import { Product } from '@/shared/models/product';
import { aosDelay } from '@/shared/utils/helper';

@Component({
  name: 'ProjectsComponent',
  components: {
    CardPost: LazyLoadService.loadComponent('CardPost'),
  },
})
export default class ProjectsComponent extends Vue {
  pageTitle = 'New Arrival';
  products: Product[] = [];
  data = [
    {
      id: 1,
      title: 'Booksyte',
      description: 'A full-stack appointment booking platform built as a personal project.',
      detail: `
        <strong>Description:</strong> <br>
        A full-stack appointment booking platform built as a personal project. It includes a user-facing interface for scheduling service appointments and an admin dashboard for managing services, users, and bookings. <br>
        <strong>Frontend:</strong> Next.js, Tailwind CSS, Shadcn UI, FullCalendar, Stripe for payments, Socket.IO<br>
        <strong>Backend:</strong> Express.js, PostgreSQL<br>
        <strong>Deployment:</strong> Vercel (frontend), Railway (backend)
      `,
      route_name: '',
      external_url: 'https://booksyte.vercel.app/',
      image_url: require('@/assets/images/1.jpg'),
    },
    {
      id: 2,
      title: 'Portfolio Landing Page',
      description: 'A modern and responsive personal portfolio theme.',
      detail: `
        <strong>Description:</strong> <br>
        A modern and responsive personal portfolio theme designed to showcase projects, skills, and services. Built with performance and clean design in mind.<br>
        <strong>Frontend:</strong> Next.js, Tailwind CSS, Shadcn UI<br>
        <strong>Deployment:</strong> Vercel
      `,
      route_name: '',
      external_url: 'https://theme-land.vercel.app/home',
      image_url: require('@/assets/images/2.jpg'),
    },
    {
      id: 3,
      title: 'Trelloway',
      description: 'A personal project inspired by Trello.',
      detail: `
        <strong>Description:</strong> <br>
        A personal project inspired by Trello. This web app allows users to manage tasks and projects using a Kanban board interface. Users can create boards, lists, and drag-and-drop cards to track progress efficiently.<br>
        <strong>Frontend:</strong> React, MUI (Material UI), Vite<br>
        <strong>Backend:</strong> Express.js, MongoDB<br>
        <strong>Deployment:</strong> Vercel (frontend), Render (backend)
      `,
      route_name: '',
      external_url: 'https://trelloway.vercel.app/',
      image_url: require('@/assets/images/3.jpg'),
    },
    // {
    //   id: 4,
    //   title: 'Todo List',
    //   description: 'Create a "to-do list" to organize and prioritize your tasks.',
    //   detail: ``,
    //   route_name: 'TodoPage',
    //   external_url: '',
    //   image_url: require('@/assets/images/4.jpg'),
    // },
    // {
    //   id: 5,
    //   title: 'Job Listings with Filtering',
    //   description: 'Job Listing with Filtering that lists available jobs that can be filtered.',
    //   detail: ``,
    //   route_name: 'JobListingPage',
    //   external_url: '',
    //   image_url: require('@/assets/images/5.jpg'),
    // },
    // {
    //   id: 6,
    //   title: 'Weather App',
    //   description: 'Weather information and forecast.',
    //   detail: ``,
    //   route_name: 'WeatherPage',
    //   external_url: '',
    //   image_url: require('@/assets/images/6.jpg'),
    // },
  ];

  aosDelayTime(index: number) {
    const arr = aosDelay(this.products.length);
    return arr[index];
  }

  created() {
    this.products = this.data.map((item: any) =>
      new Product().deserialize(item),
    );
  }
}
</script>
<style lang="scss">
.page-title {
  max-width: 550px;
  margin: auto;

  h3 {
    font-size: 32px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 27px;
    }
  }
}
</style>

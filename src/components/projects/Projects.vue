<template>
  <div class="home-projects s-container s-container--spacing px-0" id="project">
    <div class="page-title mb-12 px-4">
      <h3 class="mb-5 title-font">Latest Projects</h3>
      <!-- <p class="mb-0">This is a list of previous projects of work.</p> -->
      <p class="mb-0">Here are some of my selected projects worth sharing.</p>
    </div>

    <v-row
      no-gutters
    >
      <v-col
        v-for="(item, index) in products"
        data-aos="fade-up"
        :key="item.id"
        :data-aos-delay="aosDelayTime(index)"
        :data-aos-duration="1000"
        sm="6" lg="4"
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
      title: 'Todo List',
      description: 'Create a "to-do list" to organize and prioritize your tasks.',
      image_url: require('@/assets/images/6.jpg'),
      route_name: 'TodoPage',
    },
    {
      id: 2,
      title: 'Job Listings with Filtering',
      description: 'Job Listing with Filtering that lists available jobs that can be filtered.',
      image_url: require('@/assets/images/4.jpg'),
      route_name: 'JobListingPage',
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Weather information and forecast.',
      image_url: require('@/assets/images/5.jpg'),
      route_name: 'WeatherPage',
    },
  ];

  aosDelayTime(index: number) {
    const arr = aosDelay(this.products.length);
    return arr[index];
  }

  created() {
    this.products = this.data.map((item: any) => new Product().deserialize(item));
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

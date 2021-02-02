<template>
  <div class="">
    <DashboardLayout>
      <template slot="content">
        <section class="tab border-b-2 mt-10 border-gray-200"></section>
        <section class="mt-5">
          <p class="left">New gig</p>
        </section>
      </template>
    </DashboardLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardLayout from '@/components/DashboardLayout.vue';

export default {
  name: 'Create',
  components: {
    DashboardLayout,
  },
  data() {
    return {
      loading: true,
      gigData: {},
      tags: {},
      countries: {},
      message: '',
    };
  },
  mounted() {
    this.getTags();
    this.getCountries();
  },
  methods: {
    onCancel() {},
    addGig() {
      this.startLoadingScreen();
      this.$http.post('gigs', this.gigData)
        .then((res) => {
          this.stopLoadingScreen();
          this.message = res.data.message;
        })
        .catch((err) => {
          this.stopLoadingScreen();
          // alert(err.response.data.message)
          console.log(err.response.data.message);
        });
    },
    getTags() {
      this.startLoadingScreen();
      this.$http.get('tags')
        .then((res) => {
          this.stopLoadingScreen();
          this.tags = res.data.data;
        })
        .catch((err) => {
          this.stopLoadingScreen();
          // alert(err.response.data.message)
          console.log(err.response.data.message);
        });
    },
    getCountries() {
      this.startLoadingScreen();
      this.$http.get('countries')
        .then((res) => {
          this.stopLoadingScreen();
          this.countries = res.data.data;
        })
        .catch((err) => {
          this.stopLoadingScreen();
          // alert(err.response.data.message)
          console.log(err.response.data.message);
        });
    },
    startLoadingScreen() {
      this.$nprogress.start();
      this.loading = true;
    },
    stopLoadingScreen() {
      this.$nprogress.done();
      this.loading = false;
    },
  },
};
</script>

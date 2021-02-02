<template>
  <div class="">
    <DashboardLayout>
      <template slot="action-button">
        <button class="rounded-md gig-button px-5 flex hover justify-center items-center py-2">
          <span class="text-white">New gig</span>
          <span class="ml-3 text-white">+</span>
        </button>
      </template>
      <template slot="content">
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
    };
  },
  mounted() {
    this.getTags();
    this.getCountry();
  },
  methods: {
    onCancel() {},
    addGig() {
      this.startLoadingScreen();
      this.$http.get('gigs')
        .then((res) => {
          this.stopLoadingScreen();
          this.gigs = res.data.data;
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
    addGig() {
      this.startLoadingScreen();
      this.$http.get('gigs')
        .then((res) => {
          this.stopLoadingScreen();
          this.gigs = res.data.data;
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

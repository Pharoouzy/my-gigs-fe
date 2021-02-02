<template>
  <div class="">
    <DashboardLayout>
      <template slot="action-button">
        <router-link
          :to="{ name: 'gigs.create' }"
          class="rounded-md gig-button px-5 flex hover justify-center items-center py-2"
        >
          <span class="text-white">New gig</span>
          <span class="ml-3 text-white">+</span>
        </router-link>
      </template>
      <template slot="content">
        <section class="tab border-b-2 mt-10 border-gray-200">
          <div class="pl-10 flex justify-between pr-20">
            <div class="pr-16 pb-4 tab-active relative flex items-center">
              <p class="font-bold">All gigs</p>
              <span class="py-1 ml-3 px-2 deep-orange rounded-md text-white text-sm">
                {{ gigs.length || 0 }}
              </span>
            </div>
            <div class="pr-16 pb-4 relative flex items-center">
              <p class="font-bold">My gigs</p>
              <span class="py-1 ml-3 px-2 orange-text light-orange rounded-md text-white text-sm"
                >
                {{ myGigs.length || 0 }}
              </span
              >
            </div>
            <div class="pr-16 pb-4 relative flex items-center">
              <p class="font-bold">Rejected gigs</p>
              <span class="py-1 ml-3 orange-text px-2 light-orange rounded-md text-white text-sm"
                >
                {{ rejectedGigs.length || 0 }}
              </span
              >
            </div>
          </div>
        </section>

        <section class="filter mt-10">
          <div class="pl-10 flex justify-between pr-20">
            <button
              class="rounded-md bg-transparent filter-width border
              border-gray-200 flex justify-center items-center py-3"
            >
              <span class="text-gray-300 text-sm">Freelance</span>
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              border-gray-200 flex justify-center items-center py-3"
            >
              <img src="../../assets/images/svgs/Icon-move.svg" class="w-5">
              <span class="text-gray-300 ml-2 text-sm">Keywords</span>
              <span class="ml-5 text-gray-300">
                <img src="../../assets/images/svgs/Icon-move.svg" class="w-5">
              </span>
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              border-gray-200 flex justify-center items-center py-3"
            >
              <img src="../../assets/images/svgs/Icon-pin.svg" class="w-5">
              <span class="text-gray-300 ml-2 text-sm">Location</span>
              <!-- <img src="../../assets/images/svgs/Icon-pin.svg" class="ml-5 w-5"> -->
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              border-gray-200 flex justify-center items-center py-3"
            >
              <img src="../../assets/images/svgs/Icon-globe.svg" class="w-5">
              <span class="text-gray-300 ml-2 text-sm">Remote Friendly</span>
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              border-red-300 flex justify-center items-center py-3"
            >
              <img src="../../assets/images/svgs/Icon-color-palette.svg" class="w-5">
              <span class="orange-text ml-2 text-sm">Design</span>
              <!-- <icon icon="user-secret" /> -->
              <!-- <img src="../../assets/images/svgs/Icon-pin.svg" class="ml-5 w-5"> -->
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              border-gray-200 flex justify-center items-center py-3"
            >
              <img src="../../assets/images/svgs/Icon-briefcase.svg" class="w-5">
              <span class="text-gray-300 ml-2 text-sm">Contract</span>
            </button>
          </div>
        </section>

        <section class="dashboard-table mt-16 pb-10">
          <div class="pl-10 pr-20">
            <section class="w-full pb-5">
              <table class="admin-custom-table1">
                <thead>
                  <tr class="font-bold text-gray-500 text-sm">
                    <th></th>
                    <th>Role</th>
                    <th>Company</th>

                    <th>
                      Date
                      <!-- <img src="../../assets/images/svgs/Group 288.svg" class="w-5"> -->
                    </th>
                    <th>Salary</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-show="loading">
                    <td colspan="7" class="text-center">
                      <!-- <i
                        class="fa fa-spinner fa-spin text-center fa-lg mr-2"
                      ></i> -->
                      Loading, please wait...
                    </td>
                  </tr>
                  <tr class="text-gray-400 text-sm" v-for="(gig, index) in gigs" :key="index">
                    <td>
                      <input type="checkbox" class="w-5 h-5" name="" id="" />
                    </td>
                    <td>{{ gig.role || 'N/A' }}</td>
                    <td>{{ gig.company_name || 'N/A' }}</td>
                    <td>{{ formatDate(gig.created_at) || 'N/A' }}</td>
                    <td>
                      {{ formatNumber(gig.min_salary) || 0 }}
                      - {{ formatNumber(gig.max_salary) || 0 }}</td>
                    <td>
                      <div class="flex items-center justify-center">
                        <button class="">
                          <span class="inline-block px-10 py-2 orange-text rounded-md light-orange">
                            Delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </section>
      </template>
    </DashboardLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardLayout from '@/components/DashboardLayout.vue';

export default {
  name: 'Index',
  components: {
    DashboardLayout,
  },
  data() {
    return {
      loading: true,
      gigs: {},
      myGigs: {},
      rejectedGigs: {},
    };
  },
  mounted() {
    this.getGigs();
  },
  methods: {
    onCancel() {},
    getGigs() {
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

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
              flex justify-center items-center py-3"
              @click="filterGigs('freelance')"
              :class="{
                'border-gray-200': filter !== 'freelance',
                'border-red-300': filter === 'freelance'
              }"
            >
              <span class="text-gray-300 text-sm"
              :class="{
                'text-gray-300': filter !== 'freelance',
                'orange-text': filter === 'freelance'
              }">Freelance</span>
              <icon v-show="filter === 'freelance'" icon="check" class="ml-5 text-sm"
              :class="{
                'text-gray-300': filter !== 'freelance',
                'orange-text': filter === 'freelance'
              }" />
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              border-gray-200 flex justify-center items-center py-3"
            >
              <img src="../../assets/images/svgs/Icon-move.svg" class="w-5">
              <span class="text-gray-300 ml-2 text-sm">Keywords</span>
              <icon icon="chevron-down" class="ml-5 text-gray-400 text-sm" />
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              border-gray-200 flex justify-center items-center py-3"
            >
              <img src="../../assets/images/svgs/Icon-pin.svg" class="w-5">
              <span class="text-gray-300 ml-2 text-sm">Location</span>
              <icon icon="chevron-down" class="ml-5 text-gray-400 text-sm" />
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              flex justify-center items-center py-3"
              @click="filterGigs('remote')"
              :class="{
                'border-gray-200': filter !== 'remote',
                'border-red-200': filter === 'remote'
              }"
            >
              <img src="../../assets/images/svgs/Icon-globe.svg" class="w-5">
              <span class="text-gray-300 ml-2 text-sm"
              :class="{
                'text-gray-300': filter !== 'remote',
                'orange-text': filter === 'remote'
              }">Remote Friendly</span>
              <icon v-show="filter === 'remote'" icon="check" class="ml-5 text-sm"
              :class="{
                'text-gray-300': filter !== 'remote',
                'orange-text': filter === 'remote'
              }" />
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              flex justify-center items-center py-3"
              @click="filterGigs('design')"
              :class="{
                'border-gray-200': filter !== 'design',
                'border-red-200': filter === 'design'
              }"
            >
              <img src="../../assets/images/svgs/Icon-color-palette.svg" class="w-5">
              <span class="ml-2 text-sm"
              :class="{
                'text-gray-300': filter !== 'design',
                'orange-text': filter === 'design'
              }">Design</span>
              <icon v-show="filter === 'design'" icon="check" class="ml-5 text-sm"
              :class="{
                'text-gray-300': filter !== 'design',
                'orange-text': filter === 'design'
              }" />
            </button>
            <button
              class="rounded-md bg-transparent filter-width border
              flex justify-center items-center py-3"
              @click="filterGigs('contract')"
              :class="{
                'border-gray-200': filter === 'contract',
                'border-red-200': filter === 'contract'
              }"
            >
              <img src="../../assets/images/svgs/Icon-briefcase.svg" class="w-5">
              <span class="ml-2 text-sm"
              :class="{
                'text-gray-300': filter !== 'contract',
                'orange-text': filter === 'contract'
              }">Contract</span>
              <icon v-show="filter === 'contract'" icon="check" class="ml-5 text-sm"
              :class="{
                'text-gray-300': filter !== 'contract',
                'orange-text': filter === 'contract'
              }" />
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
                      <a href="javascript:;" class="flex justify-center items-center hover">
                        <span>Date</span>
                        <img src="../../assets/images/svgs/Group 288.svg" class="w-5 ml-2">
                      </a>
                    </th>
                    <th>
                      <a href="javascript:;" class="flex justify-center items-center hover">
                        <span>Salary</span>
                        <img src="../../assets/images/svgs/Group 288.svg" class="w-5 ml-2">
                      </a>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-show="gigs.length <= 0">
                    <td colspan="6">
                      <p class="text-center">No gigs found...</p>
                    </td>
                  </tr>
                  <tr v-if="loading">
                    <td colspan="6">
                      <p class="text-center">Loading, please wait...</p>
                    </td>
                  </tr>
                  <tr
                    class="text-gray-400 text-sm"
                    v-for="(gig, index) in gigs"
                    :key="index"
                    v-else
                  >
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
                        <button class="" @click="deleteGig(gig.id)">
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
      loading: false,
      gigs: {},
      myGigs: {},
      rejectedGigs: {},
      filter: 'design',
      countries: {},
      states: {},
      tags: [],
    };
  },
  mounted() {
    this.getGigs();
    this.getCountries();
    this.getTags();
  },
  methods: {
    onCancel() {},
    getTags() {
      this.startLoadingScreen();
      this.$http.get('tags')
        .then((res) => {
          this.stopLoadingScreen();
          this.tags = res.data.data.map((tag) => tag.name);
        })
        .catch((err) => {
          this.stopLoadingScreen();
          this.$toast(err.response.data.message, { type: 'error' });
        });
    },
    getCountries() {
      this.startLoadingScreen();
      this.$http.get('countries')
        .then((res) => {
          this.stopLoadingScreen();
          this.countries = res.data.data;
          this.states = this.countries.map((country) => country.states);
        })
        .catch((err) => {
          this.stopLoadingScreen();
          this.$toast(err.response.data.message, { type: 'error' });
        });
    },
    getGigs() {
      this.startLoadingScreen();
      this.$http.get('gigs')
        .then((res) => {
          this.stopLoadingScreen();
          this.gigs = res.data.data;
        })
        .catch((err) => {
          this.stopLoadingScreen(err);
          this.$toast(err.response.data.message, { type: 'error' });
        });
    },
    filterGigs(filter) {
      this.startLoadingScreen();
      this.$http.get(`gigs/filter/${filter}`)
        .then((res) => {
          this.stopLoadingScreen();
          this.gigs = res.data.data.gigs;
          this.filter = filter;
        })
        .catch((err) => {
          this.stopLoadingScreen(err);
          this.$toast(err.response.data.message, { type: 'error' });
        });
    },
    deleteGig(gigId) {
      this.startLoadingScreen();
      this.$http.delete(`gigs/${gigId}`)
        .then((res) => {
          this.stopLoadingScreen();
          this.getGigs();
          this.$toast(res.data.message, { type: 'success' });
        })
        .catch((err) => {
          this.stopLoadingScreen();
          this.$toast(err.response.data.message, { type: 'error' });
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

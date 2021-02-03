<template>
  <div class="">
    <DashboardLayout>
      <template slot="content">
        <section class="tab border-b-2 mt-10 border-gray-200"></section>
        <section class="pl-10 py-10">
          <p class="text-left">New gig</p>
          <div class="flex items-start space-x-10 mt-5 max-w-4xl">
            <div class="bg-white rounded-xl shadow-2xl w-60 border border-gray-200">
              <nav class="pl-5">
                <ul class="mt-5">
                  <li class="p-3">
                    <a href="javascript:;" class="mb-3 flex items-center text-gray-400">
                      <icon
                        icon="dot-circle"
                        class="text-sm"
                        :class="{'orange-text' : showBasicData}"
                      />
                      <span
                        class="ml-4 text-sm"
                        :class="{'orange-text' : showBasicData}"
                      >
                        Basic Data
                      </span>
                    </a>
                  </li>
                  <li class="p-3">
                    <a href="javascript:;" class="mb-4 flex items-center">
                      <icon
                        icon="dot-circle"
                        class="text-sm"
                        :class="{'orange-text' : !showBasicData}"
                      />
                      <span
                        class="ml-4 text-sm"
                        :class="{'orange-text' : !showBasicData}"
                      >
                        Renumeration
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              class="bg-white rounded-xl shadow-sm flex-1 border border-gray-200"
              v-if="showBasicData"
            >
              <div class="p-8">
                <div class="grid grid-cols-2 gap-5">
                  <div class="text-left">
                    <label class="text-sm block mb-3 text-gray-400">Role</label>
                    <input
                      type="text"
                      placeholder="Role"
                      v-model="gigData.role"
                      class="border rounded-md py-2 px-2 w-full border-red-500"
                      :class="{
                        'border-red-500': errors.role,
                        'border-gray-200': !errors.role,
                      }"
                    >
                    <form-error-message name="role" :errors="errors"></form-error-message>
                  </div>
                  <div  class="text-left">
                    <label class="text-sm block mb-3 text-gray-400">Company</label>
                    <input
                      type="text"
                      v-model="gigData.company_name"
                      placeholder="Company"
                      class="border border-gray-200 rounded-md py-2 px-2 w-full"
                    >
                    <form-error-message name="role" :errors="errors"></form-error-message>
                  </div>
                </div>
                <div class="mt-10">
                  <label class="text-sm block mb-3 text-gray-400 text-left">Location</label>
                  <div class="grid grid-cols-2 gap-5">
                    <div class="text-left">
                      <select
                        class="border border-gray-200 rounded-md py-3 px-3
                        text-gray-400 w-full bg-white"
                        v-model="gigData.country_id"
                        @change="getStates()"
                      >
                        <option value="">Country</option>
                        <option
                          v-for="(country, index) in countries"
                          :key="index"
                          :value="country.id"
                        >
                          {{ country.name }}
                        </option>
                      </select>
                      <form-error-message name="role" :errors="errors"></form-error-message>
                    </div>
                    <div  class="text-left">
                      <select
                        v-model="gigData.state_id"
                        class="border border-gray-200 rounded-md py-3 px-3
                        text-gray-400 w-full bg-white"
                      >
                        <option value="">State/Region</option>
                        <option
                          v-for="(state, index) in countryStates"
                          :key="index"
                          :value="state.id"
                        >
                          {{ state.name }}
                        </option>
                      </select>
                      <form-error-message name="role" :errors="errors"></form-error-message>
                    </div>
                  </div>
                  <div class="text-left mt-4">
                    <input
                      type="text"
                      v-model="gigData.address"
                      placeholder="Address"
                      class="border border-gray-200 rounded-md py-2 px-2 w-full"
                    >
                    <form-error-message name="role" :errors="errors"></form-error-message>
                  </div>
                </div>
                <div class="text-left mt-10">
                  <label class="text-sm block mb-3 text-gray-400">Tags</label>
                  <t-rich-select
                    multiple
                    :close-on-select="false"
                    :options="tags"
                    placeholder="Select multiple options"
                    v-model="gigData.tags"
                  ></t-rich-select>
                  <form-error-message name="role" :errors="errors"></form-error-message>
                  <p class="text-sm mt-5 text-gray-400">
                    Suggested tags:
                    <a href="javascript:;"
                      v-for="(tag, index) in tags"
                      :key="index"
                      class="mr-2"
                    >
                      <u>{{ tag }}</u>
                    </a>
                  </p>
                </div>
                <div class="grid grid-cols-2 gap-5 mt-10">
                  <router-link
                    :to="{ name: 'gigs.index' }"
                    class="rounded-md px-5 flex hover justify-center items-center py-2
                    col-start-3 col-end-4"
                  >
                    <span class="gray-text-400 text-sm">Cancel</span>
                  </router-link>
                  <button
                    class="rounded-lg gig-button px-10 flex hover justify-center items-center py-3
                     col-start-4 col-end-6"
                    @click="showNext(false)"
                  >
                    <span class="text-white text-sm">Continue</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              class="bg-white rounded-xl shadow-sm flex-1 border border-gray-200"
              v-else
            >
              <div class="p-8">
                <label class="text-sm block mb-3 text-gray-400 text-left">Salary</label>
                <div class="grid grid-cols-2 gap-5">
                  <div class="text-left">
                    <input
                      type="integer"
                      placeholder="Minimum"
                      v-model="gigData.min_salary"
                      class="border border-gray-200 rounded-md py-2 px-2 w-full"
                    >
                    <form-error-message name="role" :errors="errors"></form-error-message>
                  </div>
                  <div  class="text-left">
                    <input
                      type="integer"
                      v-model="gigData.max_salary"
                      placeholder="Maximum"
                      class="border border-gray-200 rounded-md py-2 px-2 w-full"
                    >
                    <form-error-message name="role" :errors="errors"></form-error-message>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-5 mt-10">
                  <button
                    @click="showNext(true)"
                    class="rounded-md px-5 flex hover justify-center items-center py-2
                    col-start-3 col-end-4"
                  >
                    <span class="gray-text-400 text-sm">Back</span>
                  </button>
                  <button
                    class="rounded-lg gig-button px-10 flex hover justify-center items-center py-3
                     col-start-4 col-end-6"
                    @click="addGig"
                  >
                    <span class="text-white text-sm">Add gig</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </DashboardLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardLayout from '@/components/DashboardLayout.vue';
import { TRichSelect } from 'vue-tailwind/dist/components';
import FormErrorMessage from '@/components/FormErrorMessage.vue';

export default {
  name: 'Create',
  components: {
    DashboardLayout,
    TRichSelect,
    FormErrorMessage,
  },
  data() {
    return {
      loading: true,
      errors: {},
      gigData: {
        role: '',
        company_name: '',
        country_id: '',
        state_id: '',
        address: '',
        tags: [],
        min_salary: '',
        max_salary: '',
      },
      tags: {},
      countries: {},
      states: {},
      countryStates: {},
      message: '',
      showBasicData: true,
    };
  },
  mounted() {
    this.getTags();
    this.getCountries();
  },
  methods: {
    onCancel() {},
    showNext(status) {
      this.showBasicData = status;
    },
    addGig() {
      this.startLoadingScreen();
      this.$http.post('gigs', this.gigData)
        .then((res) => {
          this.stopLoadingScreen();
          this.$toast(res.data.message, { type: 'success' });
          this.$router.push({ name: 'gigs.index' });
        })
        .catch((err) => {
          this.stopLoadingScreen();
          this.errors = err.response.data.errors;
          this.$toast(err.response.data.message, { type: 'error' });
        });
    },
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
    getStates() {
      this.startLoadingScreen();
      // eslint-disable-next-line max-len
      this.countryStates = this.states[0].filter((state) => state.country_id === this.gigData.country_id);
      this.stopLoadingScreen();
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

<template>
    <div class="sidebar border-r-2 border-gray-200">
      <div class="flex items-center mt-12 pl-8">
        <h3 class="ml-3 font-bold text-base">
          <img src="../../assets/images/svgs/Group 493.svg">
        </h3>
      </div>
      <nav class="pl-8">
        <ul class="mt-10">
          <li class="p-3">
            <router-link to="/" class="mb-4 flex items-center text-gray-400">
              <img src="../../assets/images/svgs/Icon-home-fill.svg" class="w-5">
              <span class="ml-4 text-sm mt-1">Dashboard</span>
            </router-link>
          </li>
          <li class="p-3">
            <router-link to="/" class="mb-4 flex items-center">
              <img src="../../assets/images/svgs/Icon-briefcase-fill.svg" class="w-5">
              <span class="ml-4 text-sm mt-1 orange-text">Gigs</span>
            </router-link>
          </li>
          <li class="p-3">
            <router-link to="/" class="mb-4 flex items-center text-gray-400">
              <img src="../../assets/images/svgs/Icon-npm-fill.svg" class="w-5">
              <span class="ml-4 text-sm mt-1">Company</span>
            </router-link>
          </li>
          <li class="p-3">
            <router-link to="/" class="mb-4 flex items-center text-gray-400">
              <img src="../../assets/images/svgs/Icon-person-fill.svg" class="w-5">
              <span class="ml-4 text-sm mt-1">Account</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

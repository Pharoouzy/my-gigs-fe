<template>
  <section class="bg-transparent">
    <nav
      class="navbar flex items-center border-b-2
      border-gray-200 justify-between py-8 pr-20 px-10"
    >
      <div class="left">
        <div class="relative input-width">
          <input
            placeholder="search"
            type="search"
            class="bg-transparent w-full h-10 input-left-padding
            rounded-md border border-gray.200"
          />
          <span class="absolute search-icon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div class="right w-1/5 flex items-center justify-between">
        <span>
          <img src="../../assets/images/svgs/Group 140.svg" class="w-5">
        </span>
        <span>
          <img src="../../assets/images/svgs/Icon-email.svg" class="w-5">
        </span>
        <span>
          <img src="../../assets/images/svgs/Icon-settings.svg" class="w-5">
        </span>
        <!-- <img src="" class="w-16 h-16" alt="">
                          -->
        <div class="bg-black w-10 rounded-md h-10">
          <img src="../../assets/images/Rectangle 13@2x.png" class="">
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted() {
    this.$router.push({ name: 'gigs.index' });
  },
};
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nprogress .bar {
  background: #2F417E !important;
  // height: 5px !important;
}
#nprogress .spinner-icon {
  border-top-color: #2F417E !important;
  border-left-color: #2F417E !important;
}

::-webkit-scrollbar {
  width: 8px;
  border-radius: 3px;
}
::-webkit-scrollbar-track {
  background: #b05a93;
}

::-webkit-scrollbar-thumb {
  background: rgb(247, 244, 244);
}

::-webkit-scrollbar-thumb:hover {
  background: #b05a93;
  width: 8px;
  cursor: pointer;
}
</style>

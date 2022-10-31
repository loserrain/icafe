<template>
  <div id="app">
    <router-view id="app__view" />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import './style/normalize.css';
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', '微軟正黑體', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}

#app__view {
  width: 100%;
}
</style>

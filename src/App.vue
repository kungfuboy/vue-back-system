<template>
  <div id="app">
      <navTop></navTop>
      <div class="main">
          <menuSide></menuSide>
          <context></context>
      </div>
  </div>
</template>

<script>
import navTop from '@/components/navTop'
import menuSide from '@/components/menu'
import context from '@/components/context'

export default {
  components: {
    navTop,
    menuSide,
    context
  }
}
</script>

<style lang="less" scope>
@import 'assets/resize';

body {
    display: flex;
    box-sizing: border-box;
}
#app {
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    .main {
        display: flex;
        flex: 1;
        flex-shrink: 0;
    }
}
</style>
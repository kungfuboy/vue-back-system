<template>
  <div class="top">
      Cooco
  </div>
</template>

<script>
export default {
  name: 'navTop'
}
</script>

<style lang="less" scope>
@import '../assets/public';
@import '../assets/color';

.top {
    width: 100%;
    height: 66px;
    box-sizing: border-box;
    background-color: @themePri;
    color: @themeText;
    padding: 0 40px;
    display: flex;
    align-items: center;
    font-size: 20px;
    .shadow;
}
</style>
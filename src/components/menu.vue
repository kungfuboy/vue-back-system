<template>
  <ul class="menu">
      <li v-for="item in items">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'menuSide',
  data() {
    return {
      items: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五', '菜单六', '菜单七', '菜单八']
    }
  }
}
</script>

<style lang="less">
@import '../assets/color';

.menu {
    width: 220px;
    padding-top: 20px;
    border-right: 1px solid #d5d5d5;
    > li {
      height: 44px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      font-size: 14px;
      color: @themeDark;
      &:hover {
        background-color: @themeBg;
      }
    }
}
</style>
<template>
    <aside class="menu" :class="{active: menuState}">
        <router-link @click="$store.commit('handleMenuState')" v-for="(link, index) in routerLinks" :to="link.path" :key="index">{{ link.name }}</router-link>
    </aside>
</template>

<script>
export default {
    name: 'MenuCom',
    data() {
        return {
            routerLinks: [
                { path: '/', name: '数据列表' },
                { path: '/edit', name: '编辑表单' }
            ]
        }
    },
    computed: {
        menuState() {
            return this.$store.state.menuShow
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/color';

@lineHeight: 44px;

aside.menu {
    width: 70vw;
    padding-top: 20px;
    background-color: @menuBg;
    position: absolute;
    top: 0;
    z-index: 10;
    transition: all .3s ease;
    transform: translateX(-100%);
    left: 0;
    bottom: 0;
    &.active {
        transform: translateX(0);
    }
    >a {
        display: block;
        height: @lineHeight;
        line-height: @lineHeight;
        padding: 0 20px;
        font-size: 14px;
        color: @menuText;
        cursor: pointer;
        font-weight: bold;
        position: relative;
        &:after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border: 1px solid @menuText;
            position: absolute;
            top: 50%;
            margin-top: -4px;
            right: 20px;
            border-radius: 10px;
            color: @menuText;
        }
        &:hover,
        &.router-link-exact-active {
            .parentActive;
            &:after {
                border-color: white;
            }
        }
        &.router-link-exact-active {
            &:after {
                background-color: white;
            }
        }
    }
    @media screen and (min-width: 720px) {
        position: initial;
        width: 240px;
        transform: none;
        &.active {
            transform: none;
        }
    }
}

.parentActive {
    background-color: @menuHighBg;
    color: @menuHighText;
}
</style>
<template>
    <aside class="menu">
        <router-link v-for="(link, index) in routerLinks" :to="link.path" :key="index">{{ link.name }}</router-link>
    </aside>
</template>

<script>
export default {
    name: 'menuSide',
    data() {
        return {
            routerLinks: [
                { path: '/', name: '数据列表' },
                { path: '/edit', name: '编辑表单' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/color';

@lineHeight: 44px;

aside.menu {
    width: 240px;
    padding-top: 20px;
    background-color: @menuBg;
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
}

.parentActive {
    background-color: @menuHighBg;
    color: @menuHighText;
}
</style>
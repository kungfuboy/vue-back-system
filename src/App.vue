<template>
    <div id="app">
        <navTop></navTop>
        <div class="main">
            <menuSide></menuSide>
            <section class="content">
                <topLabel></topLabel>
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>

<script>
import navTop from '@/components/navTop'
import topLabel from '@/components/topLabel'
import menuSide from '@/components/menuSide'

export default {
    components: {
        navTop,
        topLabel,
        menuSide
    }
}
</script>

<style lang="less" scope>
@import 'assets/resize';
@import 'assets/color';

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
        .content {
            flex: 1;
            background-color: @contentBg;
        }
    }
}
</style>
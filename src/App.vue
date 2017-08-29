<template>
    <div id="app">
        <NavCom></NavCom>
        <div class="main">
            <MenuCom></MenuCom>
            <section class="content">
                <LabelCom></LabelCom>
                <router-view></router-view>
            </section>
            <!-- <i :class="shadow-win"></i> -->
        </div>
    </div>
</template>

<script>
import NavCom from '@/components/NavCom'
import LabelCom from '@/components/LabelCom'
import MenuCom from '@/components/MenuCom'

export default {
    components: {
        NavCom,
        LabelCom,
        MenuCom
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
        overflow: auto;
        border: 1px solid red;
        flex: 1;
        flex-shrink: 0;
        position: relative;
        padding-top: 66px;
        .content {
            flex: 1;
            background-color: @contentBg;
        }
        >i {
            width: 0;
            height: 0;
            // &.shadow-win {
            //     position: absolute;
            //     display: block;
            //     top: 0;
            //     bottom: 0;
            //     left: 0;
            //     right: 0;
            //     z-index: 5;
            //     background-color: rgba(0, 0, 0, 0.2);
            // }
        }
    }
}
</style>
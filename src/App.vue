<template>
    <div id="app">
        <HeaderCom></HeaderCom>
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
import HeaderCom from '@/components/HeaderCom'
import LabelCom from '@/components/LabelCom'
import MenuCom from '@/components/MenuCom'

export default {
    components: {
        HeaderCom,
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
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    .main {
        display: flex;
        overflow: auto;
        flex: 1;
        flex-shrink: 0;
        .content {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex: 1;
            overflow: auto;
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
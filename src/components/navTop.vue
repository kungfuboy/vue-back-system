<template>
    <div class="top">
        <div class="navbar-brand">
            <img src="../assets/images/logo.png" />
            <h3>Cooco</h3>
        </div>
        <span @click="handleListShow">
            <img src="../assets/images/head_icon.png" /> 管理员
            <ul :class="{active: isActive}">
                <li>注销</li>
            </ul>
        </span>
    </div>
</template>

<script>
export default {
    name: 'navTop',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handleListShow() {
            this.isActive = !this.isActive
        }
    }
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
    color: @normalText;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    .shadow;
    div.navbar-brand {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        img {
            margin-right: 10px;
            height: 30px;
        }
    }
    span {
        height: 100%;
        display: inline-flex;
        align-items: center;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        img {
            border-radius: 50%;
            width: 30px;
            margin: 8px;
        }
        &:after {
            content: "";
            position: relative;
            top: 3px;
            width: 0px;
            height: 0px;
            margin: 0 10px;
            border-width: 5px;
            border-style: solid;
            border-color: @normalText transparent transparent transparent;
        }
        ul {
            position: absolute;
            right: 10px;
            top: 56px;
            color: @themePri; // transition: all .3s ease;
            background-color: white;
            width: 0;
            height: 0;
            opacity: 0;
            overflow: hidden;
            transition: all .2s ease;
            border-radius: 2px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, .23), 0 3px 10px rgba(0, 0, 0, .16);
            z-index: 5;
            li {
                text-align: left;
            }
        }
        ul.active {
            padding: 10px;
            width: 100px;
            height: 40px;
            min-width: 100px;
            min-height: 40px;
            transition: all .1s ease;
            opacity: 1;
        }
    }
}
</style>
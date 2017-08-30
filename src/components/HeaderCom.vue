<template>
    <header>
        <i class="material-icons" @click="$store.commit('handleMenuState')">menu</i>
        <div class="navbar-brand">
            <img src="../assets/images/logo.png" />
            <h3>Cooco</h3>
        </div>
        <span class="user-setting" @click="handleListShow">
            <i class="material-icons">brightness_low</i>
            <div class="mobile" :class="{active: isActive}">
                <img src="../assets/images/head_icon.png" />
                <b>管理员</b>
                <ul>
                    <li>注销</li>
                </ul>
            </div>
            <!-- <div class="pc" :class="{active: isActive}">
                    <img src="../assets/images/head_icon.png" />
                    <b>管理员</b>
                    <ul>
                        <li>注销</li>
                    </ul>
                </div> -->
        </span>
    </header>
</template>

<script>
export default {
    name: 'HeaderCom',
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

<style lang="less" scoped>
@import '../assets/public';
@import '../assets/color';

@headerHeight: 66px;
header {
    position: absolute;
    top: 0;
    width: 100%;
    height: @headerHeight;
    display: flex;
    z-index: 20;
    i {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: @normalText;
        width: @headerHeight;
        z-index: 10;
        background-color: #fff;
    }
    .navbar-brand {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        background-color: #fff;
        img {
            margin-right: 10px;
            height: 30px;
            transition: all .4s ease;
            transform: rotate(30deg);
            &:hover {
                transform: rotate(60deg);
            }
        }
        h3 {
            display: inline;
        }
    }
    .user-setting {
        display: inline-flex;
        align-items: center;
        position: relative;
        i {
            height: 100%;
            background-color: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: @normalText;
            width: @headerHeight;
            z-index: 10;
        }
        >.mobile {
            position: absolute;
            top: 100%;
            right: 0;
            width: 100vw;
            background-color: #fff;
            z-index: 3;
            height: 50vh;
            transition: all .2s ease;
            transform: translateY(-100% - 66px);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            box-shadow: 0 2px 2px rgba(0,0,0,0.05), 0 1px 0 rgba(0,0,0,0.05);
            img {
                width: 140px;
                height: 140px;
                padding: 3px;
                box-sizing: border-box;
                border: 1px solid #efefef;
                border-radius: 50%;
            }
            &.active {
                transform: translateY(0);
            }
        }
        >.pc {
            display: none;
        }
    }
}

@media screen and (min-width: 720px) {
    header {
        padding: 0 30px;
        >i {
            display: none;
        }
        .navbar-brand {
            justify-content: flex-start;
        }
        .user-setting {
            position: relative;
            >i {
                display: none;
            }
            >b,
            >img,
            >ul {
                display: block;
            }
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
                top: 46px;
                color: @themePri;
                background-color: white;
                width: 100px;
                height: 0;
                min-width: 100px;
                min-height: 40px;
                opacity: 0;
                overflow: hidden;
                padding: 10px;
                transition: all .2s ease;
                border-radius: 2px;
                box-shadow: 0 3px 10px rgba(0, 0, 0, .23), 0 3px 10px rgba(0, 0, 0, .16);
                z-index: 5;
                li {
                    text-align: left;
                    color: @normalText;
                }
            }
            ul.active {
                transform: translateY(10px);
                height: 40px;
                min-height: 40px;
                opacity: 1;
            }
        }
    }
}
</style>
<template>
    <nav class="top">
        <i class="material-icons" @click="$store.commit('handleMenuState')">menu</i>
        <div class="navbar-brand">
            <img src="../assets/images/logo.png" />
            <h3>Cooco</h3>
        </div>
        <span class="user-setting" @click="handleListShow">
            <i class="material-icons">brightness_low</i>
            <img src="../assets/images/head_icon.png" /> 
            <b>管理员</b>
            <ul :class="{active: isActive}">
                <li>注销</li>
            </ul>
        </span>
    </nav>
</template>

<script>
export default {
    name: 'NavCom',
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

@navHeight: 66px;
nav.top {
    width: 100%;
    height: @navHeight;
    display: flex;
    i {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: @normalText;
        width: @navHeight;
    }
    .navbar-brand {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        img {
            margin-right: 10px;
            height: 30px;
        }
        h3 {
            display: inline;
        }
    }
    .user-setting {
        display: inline-flex;
        align-items: center;
        >b,
        >img,
        >ul {
            display: none;
        }
    }
}

@media screen and (min-width: 720px) {
    nav.top {
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
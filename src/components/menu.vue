<template>
    <ul class="menu">
        <li v-for="(item, index) in items" :class="{ active: activeParent === index }" @click="handleParent(index)">
            <div>{{item.name}}</div>
            <ul @click="handleChild($event)">
                <li v-for="(child, n) in item.children" :class="{ active: activeChild === n }" :value="n">{{ child.name }}</li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'menuSide',
    data() {
        return {
            items: [
                { name: "菜单一", children: [{ name: "子菜单1" }, { name: "子菜单1" }, { name: "子菜单1" }, { name: "子菜单1" }, { name: "子菜单1" }] },
                { name: "菜单二", children: [{ name: "子菜单2" }, { name: "子菜单2" }, { name: "子菜单2" }, { name: "子菜单2" }, { name: "子菜单2" }] },
                { name: "菜单三", children: [{ name: "子菜单3" }, { name: "子菜单3" }, { name: "子菜单3" }, { name: "子菜单3" }, { name: "子菜单3" }] }
            ],
            activeParent: null,
            activeChild: null,
        }
    },
    methods: {
        handleParent(index) {
            this.activeParent = index

        },
        handleChild($event) {
            this.activeChild = $event.target.value
        }
    }
}
</script>

<style lang="less">
@import '../assets/color';

ul.menu {
    width: 240px;
    padding-top: 20px;
    background-color: @menuBg;
    >li {
        height: 44px;
        overflow: hidden;
        transition: all 0.25s ease-in;
        &.active {
            >div {
                .parentActive;
            }
            >ul {
                >li {
                    &:hover,
                    &.active {
                        color: white;
                    }
                }
            }
        }
        div {
            height: 44px;
            padding: 0 20px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: @menuText;
            cursor: pointer;
            font-weight: bold;
            &:hover {
                .parentActive;
            }
        }
        >ul {
            padding: 0 20px;
            >li {
                height: 44px;
                padding: 0 20px;
                display: flex;
                align-items: center;
                font-size: 14px;
                color: @menuText;
                cursor: pointer;
            }
        }
    }
}

.parentActive {
    background-color: @menuHighBg;
    color: @menuHighText;
}
</style>
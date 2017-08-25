<template>
    <ul class="menu">
        <li v-for="(item, index) in items" :class="{ active: activeParent === index }">
            <span @click="handleParent(index)">{{item.name}}</span>
            <ul @click="handleChild($event)" v-show="activeParent === index">
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
                {
                    name: "系统管理", children: [{ name: "管理员列表" }, { name: "角色管理" }, { name: "菜单管理" }, { name: "SQL监控" },
                    { name: "定时任务" }, { name: "参数管理" }, { name: "文件上传" }, { name: "系统日志" }]
                },
                { name: "菜单二", children: [{ name: "子菜单2" }, { name: "子菜单2" }, { name: "子菜单2" }, { name: "子菜单2" }, { name: "子菜单2" }] },
                { name: "菜单三", children: [{ name: "子菜单3" }, { name: "子菜单3" }, { name: "子菜单3" }, { name: "子菜单3" }, { name: "子菜单3" }] }
            ],
            activeParent: null,
            activeChild: null,
        }
    },
    methods: {
        handleParent(index) {
            this.activeParent = this.activeParent === index ? null : index
        },
        handleChild($event) {
            this.activeChild = $event.target.value
        }
    }
}
</script>

<style lang="less">
@import '../assets/color';

@lineHeight: 44px;

ul.menu {
    width: 240px;
    padding-top: 20px;
    background-color: @menuBg;
    >li {
        display: flex;
        flex-direction: column;
        transition: all .3s ease;
        >span {
            height: @lineHeight;
            line-height: @lineHeight;
            padding: 0 20px;
            display: block;
            font-size: 14px;
            flex-shrink: 0;
            color: @menuText;
            cursor: pointer;
            font-weight: bold;
            position: relative;
            &:hover {
                .parentActive;
            }
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
        }
        >ul {
            // height: 400px;
            background-color: @menuChildBg;
            >li {
                height: @lineHeight;
                display: flex;
                flex-shrink: 0;
                align-items: center;
                font-size: 14px;
                color: @menuText;
                cursor: pointer;
                &:before {
                    content: '';
                    width: 4px;
                    height: 4px;
                    margin: 0 20px;
                    border-radius: 10px;
                    display: block;
                    background-color: @menuText;
                }
            }
        }

        &.active {
            >span {
                .parentActive;
                &:after {
                    border-color: white;
                    background-color: white;
                }
            }
            >ul {
                >li {
                    &:hover,
                    &.active {
                        color: white;
                        &:before {
                            background-color: white;
                        }
                    }
                }
            }
        }
    }
}

.parentActive {
    background-color: @menuHighBg;
    color: @menuHighText;
}
</style>
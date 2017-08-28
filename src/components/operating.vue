<template>
    <div class="operating">
        <div>
            <input type="text" v-model="condition_1" placeholder="搜索条件1" />
            <input type="text" v-model="condition_2" placeholder="搜索条件2" />
            <i class="btn search">
                <img src="../assets/icon/search_icon.svg" />
            </i>
            <i class="btn primary">
                <img src="../assets/icon/create_icon.svg" />
            </i>
        </div>
        <button type="button" class="btn danger"><img src="../assets/icon/delete_icon.svg" />删除选中项</button>
    </div>
</template>
<script>
export default {
    name: 'operating',
    data() {
        return {
            condition_1: '',
            condition_2: '',
            isActive: false
        }
    },
    methods: {
        handleInput() {
            this.isActive = true;
        }
    }
}
</script>
<style lang="less" scope>
@import '../assets/color';

div.operating {
    height: 33px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    >div {
        display: flex;
        i {
            margin-right: 20px;
            &.search {
                border: 1px solid @priColor;
            }
        }
        input {
            width: 20em;
            padding: 0 8px;
            border: none;
            border-bottom: 1px solid @themePri;
            transition: all .4s ease;
            &:first-child {
                border-right: 1px solid @tableLine;
            }
        }
    }
}
</style>


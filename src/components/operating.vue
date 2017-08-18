<template>
    <div class="operating">
        <div>
            <i class="btn safe">
                <img src="../assets/icon/create_icon.svg" />
            </i>
            <input id="searchInput" type="text" :class="{ active: isActive }" placeholder="搜索你想要的" />
            <i class="btn primary" @click="handleInput()">
                <img src="../assets/icon/search_icon.svg" />
            </i>
        </div>
        <button type="button" class="btn danger">删除选中项</button>
    </div>
</template>
<script>
export default {
    name: 'operating',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handleInput(e) {
            this.isActive = !this.isActive;
            this.$el.querySelector('#searchInput').focus();
        }
    }
}
</script>
<style lang="less" scope>
@import '../assets/color';

div.operating {
    height: 33px;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    >div {
        display: flex;
        i {
            margin-right: 20px;
        }
        input {
            width: 0;
            padding: 0;
            border: none;
            border-color: white;
            overflow: hidden;
            transition: all .2s ease;
        }
        input.active {
            width: 26em;
            padding: 0 5px;
            margin-right: 20px;
            border-bottom: 1px solid @themePri;
        }
    }
}
</style>


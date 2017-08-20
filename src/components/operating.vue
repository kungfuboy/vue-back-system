<template>
    <div class="operating">
        <div>
            
            <input id="searchInput" type="text" :class="{ active: isActive }" @click="handleInput" placeholder="检索…… " />
            <i class="btn safe">
                <img src="../assets/icon/search_icon.svg" />
            </i>
            <i class="btn primary">
                <img src="../assets/icon/create_icon.svg" />
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
            width: 13em;
            padding: 0 5px;
            margin-right: 1em;
            border: none;
            border-bottom: 1px solid @themePri;
            transition: all .4s ease;
        }
        input.active {
            width: 26em;
        }
    }
}
</style>


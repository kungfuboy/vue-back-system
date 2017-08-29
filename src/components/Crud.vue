<template>
    <div class="crud">
        <div>
            <input type="text" v-model="condition_1" placeholder="condition 1 ..." />
            <input type="text" v-model="condition_2" placeholder="condition 2 ..." />
            <button class="btn">
                <i class="material-icons">brightness_low</i> 搜索</button>
            <button class="btn">
                <i class="material-icons">brightness_low</i> 新增</button>
        </div>
        <button type="button" class="btn danger"><img src="../assets/icon/delete_icon.svg" />删除选中项</button>
    </div>
</template>
<script>
export default {
    name: 'Crud',
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

div.crud {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    >div {
        display: flex;
        flex-shrink: 0;
        width: 100%;
        flex-direction: column;

        button.btn {
            width: 100%;
            height: 36px;
            margin: 6px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #000;
            >i {}
        }
        input {
            width: 100%;
            height: 38px;
            padding: 0 8px;
            font-size: 16px;
            margin: 6px 0;
            border: none;
            border-bottom: 1px solid @themePri;
            transition: all .4s ease;
            &:first-child {
                border-right: 1px solid @tableLine;
            }
            &[placeholder] {
                font-style: italic;
                color: rgba(0, 0, 0, 0.1);
            }
        }
    }
    >button.btn {
        width: 100%;
        height: 36px;
        margin: 6px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        >i {}
    }
}
</style>


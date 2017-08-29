<template>
    <div class="crud">
        <div>
            <input type="text" v-model="condition_1" placeholder="condition 1 ..." />
            <input type="text" v-model="condition_2" placeholder="condition 2 ..." />
            <button class="btn primary">
                <i class="material-icons">search</i> 搜索</button>
            <button class="btn safe">
                <i class="material-icons trans90">add</i> 新增</button>
        </div>
        <button type="button" class="btn danger">
            <i class="material-icons">delete_forever</i> 删除</button>
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
@import '../assets/public';

div.crud {
    width: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
    box-sizing: border-box;
    >div {
        display: flex;
        flex-shrink: 0;
        width: 100%;
        flex-direction: column;
        button.btn {
            display: inline-flex;
            width: 100%;
            height: 38px;
            margin: 6px 0;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 2px;
            transition: all .4s ease;
            >i {}
        }
        input {
            display: inline-flex;
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
            &::placeholder {
                font-style: italic;
                color: rgba(0, 0, 0, 0.3);
            }
        }
    }
    >button.btn {
        width: 100%;
        height: 38px;
        margin: 6px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 2px;
        .shadow;
        >i {}
    }
}

@media screen and (min-width: 1200px) {
    div.crud {
        >div {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            input,
            button.btn {
                width: 24%;
            }
        }
    }
}

@media screen and (min-width: 1600px) {
    div.crud {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        >div {
            width: 860px;
            justify-content: space-between;
            input {
                width: 300px;
            }
            button.btn {
                width: 100px;
            }
        }
        >button.btn {
            width: 100px;
        }
    }
}
</style>


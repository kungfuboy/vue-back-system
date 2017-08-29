<template>
    <section>
        <form>
            <div>
                <b class="required">公司名称</b>
                <input type="text">
            </div>
            <div>
                <b class="required">地址</b>
                <input type="text">
            </div>
            <div>
                <b class="required">联系人</b>
                <input type="text">
            </div>
            <div>
                <b class="required">邮箱</b>
                <input type="text">
                <i class="tips wrong_tips">邮箱格式不合法</i>
            </div>
            <div>
                <b>手机号</b>
                <input type="text">
            </div>
            <div class="inline">
                <b>注册日期</b>
                <input type="text">
            </div>
            <div class="inline">
                <b>失效时间</b>
                <input type="text">
            </div>
            <div class="inline">
                <b>最大用户数</b>
                <input type="text">
            </div>
            <div class="inline">
                <b>公司性质</b>
                <select name="">
                    <option value="zf">政府</option>
                    <option value="gq">国企</option>
                    <option value="my">民营</option>
                </select>
            </div>
            <div>
                <b>经营范围</b>
                <div class="between-list">
                    <span>食品
                        <input type="checkbox">
                    </span>
                    <span>药品
                        <input type="checkbox">
                    </span>
                    <span>服装
                        <input type="checkbox">
                    </span>
                </div>
            </div>
            <div>
                <b>是否VIP用户</b>
                <input type="checkbox">
            </div>
            <div>
                <b>状态</b>
                <div class="around-list">
                    <span>已启用
                        <input type="radio">
                    </span>
                    <span>已禁用
                        <input type="radio">
                    </span>
                </div>
            </div>
            <button class="btn safe" type="button">
                <i class="material-icons">cloud_done</i>保存
            </button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'editTable',
    data() {
        return {
            formData: {
                company: '',
                address: '',
                name: '',
                email: '',
                phone: '',
                signDate: '',
                FailureTime: '',
                maxUsers: ''
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/public';
@import '../assets/color';

section {
    flex: 1;
    background-color: white;
    form {
        padding: 15px;
        display: flex;
        flex-direction: column;
        >div {
            margin: 6px 0;
            position: relative;
            b {
                display: inline-block;
                font-weight: bold;
                margin-bottom: 3px;
                position: relative;
                color: #333;
                &.required:after {
                    display: block;
                    position: absolute;
                    content: '*';
                    color: @dangerColor;
                    right: -10px;
                    top: 0;
                    font-size: 14px;
                }
            }
            input[type=text] {
                width: 100%;
                height: 34px;
                padding: 5px 12px;
                border-radius: 4px;
                color: #555;
                border: 1px solid #ccc;
                background-color: #fff;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            }
            >.tips {
                position: absolute;
                color: white;
                animation: jump 1s infinite;
                background-color: @wrong_tips;
                box-shadow: inset 0 3px 3px @wrong_tips;
                height: 24px;
                line-height: 24px;
                width: auto;
                padding: 0 15px;
                font-size: 12px;
                border-radius: 4px;
                top: -5px;
                right: 0;
                &:after {
                    display: block;
                    content: '';
                    border-width: 8px 8px 8px 8px;
                    border-style: solid;
                    border-color: @wrong_tips transparent transparent transparent;
                    position: absolute;
                    right: 10%;
                    top: 100%;
                }
            }
            &.inline {
                display: inline-flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                b {
                    margin-right: 20px;
                    flex-shrink: 0;
                }
                input[type=text] {
                    width: auto;
                    flex: 1;
                }
                select {
                    flex: 1;
                    background-color: #fff;
                    border: 1px solid #ccc;
                    height: 34px;
                }
            }
            >.between-list {
                display: flex;
                justify-content: space-between;
                span {
                    flex-shrink: 0;
                    align-items: center;
                }
            }
            >.around-list {
                display: flex;
                justify-content: space-around;
            }
        }
        button.btn {
            margin: 10px 0;
            width: 100%;
            height: 38px;
            justify-content: center;
            font-size: 16px;
            i {
                margin-right: 3px;
            }
        }
    }
}

@keyframes jump {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-3px);
    }
    100% {
        transform: translateY(0px);
    }
}

@media screen and (min-width: 720px) {
    section {
        flex: 1;
        margin: 30px;
        form {
            padding: 30px 100px;
            max-width: 720px;
            margin: auto;
            >div,
            >button.btn {
                margin: 12px;
                max-width: 720px;
            }
        }
    }
}
</style>


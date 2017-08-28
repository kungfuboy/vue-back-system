<template>
    <form>
        <div>
            <div>
                <span>公司名称</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>地址</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>联系人</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>邮箱</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>手机号</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>注册日期</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>失效时间</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>最大用户数</span>
            </div>
            <div><input type="text" /></div>
        </div>
        <div>
            <div>
                <span>公司性质</span>
            </div>
            <div>
                <select name="">
                    <option value="zf">政府</option>
                    <option value="gq">国企</option>
                    <option value="my">民营</option>
                </select>
            </div>
        </div>
        <div>
            <div>
                <span>经营范围</span>
            </div>
            <div>
                食品
                <input type="checkbox">
                药品
                <input type="checkbox">
                服装
                <input type="checkbox">
            </div>
        </div>
        <div>
            <div>
                <span>是否VIP用户</span>
            </div>
            <div><input type="checkbox"></div>
        </div>
        <div>
            <div>
                <span>状态</span>
            </div>
            <div>
                已启用
                <input type="radio"> 已禁用
                <input type="radio">
            </div>
        </div>
        <div>
            <button class="btn safe" type="button">保存</button>
        </div>
    </form>
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

form {
    flex: 1;
    margin: 0 30px;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    >div {
        margin: 10px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: @normalText;
        >div:first-child {
            flex: 2;
            text-align: right;
        }
        >div:last-child {
            padding: 0 10px;
            flex: 3;
        }
        >div {
            span {
                min-width: 2em;
                text-align: right;
            }
            input[type="text"] {
                height: 32px;
                padding: 0 10px;
                min-width: 28em;
                font-size: 14px;
                color: @remarkText;   // 备注文本色

            }
            select {
                width: 8em;
                height: 2em;
            }
        }
        .btn {
            width: 100px;
            height: 36px;
            font-size: 16px;
            text-align: center;
            display: block;
        }
        &.required {
            &:before {
                content: '*';
                position: absolute;
                color: red;
                font-size: 20px;
            }
        }
    }
}
</style>


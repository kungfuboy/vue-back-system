<template>
    <div class="context">
        <topLabel></topLabel>
        <operating></operating>
        <ul class="table">
            <li>
                <b>Id</b>
                <b>用户名</b>
                <b>密码</b>
                <b>身份</b>
                <b>状态</b>
                <b>Email</b>
                <b>创建时间</b>
                <b>更新时间</b>
                <b>操作</b>
            </li>
            <li v-for="item in items">
                <span>{{ item.id }}</span>
                <span>{{ item.username }}</span>
                <span>{{ item.password }}</span>
                <span>{{ item.roleName }}</span>
                <span>{{ item.status }}</span>
                <span>{{ item.email }}</span>
                <span>{{ item.createtime | date }}</span>
                <span>{{ item.updatetime | date}}</span>
                <span>
                    <i class="safe"><img src="../assets/icon/edit_icon.svg" /></i>
                    <i class="danger"><img src="../assets/icon/delete_icon.svg" /></i>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
import topLabel from '@/components/topLabel'
import operating from '@/components/operating'

export default {
    name: 'context',
    data() {
        return {
            items: [{ "id": 63, "username": "444536546", "password": "5e74b1268b06da85d109bfd16aa76421", "roleName": "测试员", "status": 1, "roleId": 2, "email": "", "createtime": 1503027406000, "updatetime": 1503027406000 }, { "id": 62, "username": "gfgfhfghgfss", "password": "f9e6933a851a7d181376e76638d37a2d", "roleName": "管理员", "status": 1, "roleId": 1, "email": "", "createtime": 1503025782000, "updatetime": 1503025779000 }, { "id": 59, "username": "444", "password": "", "roleName": "管理员", "status": 1, "roleId": 1, "email": "44444", "createtime": 1502862694000, "updatetime": 1502869182000 }, { "id": 61, "username": "666", "password": "f9e6933a851a7d181376e76638d37a2d", "roleName": "测试员", "status": 1, "roleId": 2, "email": "", "createtime": 1502866972000, "updatetime": 1502866972000 }, { "id": 60, "username": "44444", "password": "4444444", "roleName": "管理员", "status": 1, "roleId": 1, "email": "", "createtime": 1502862753000, "updatetime": 1502862908000 }, { "id": 56, "username": "44", "password": "444444", "roleName": "测试员", "status": 1, "roleId": 2, "email": "4444", "createtime": 1502854185000, "updatetime": 1502862562000 }, { "id": 52, "username": "qwe123", "password": "123123", "roleName": "管理员", "status": 1, "roleId": 1, "email": "123", "createtime": 1502851368000, "updatetime": 1502852774000 }, { "id": 51, "username": "qweqwe", "password": "0144712dd81be0c3d9724f5e56ce6685", "roleName": "测试员", "status": 1, "roleId": 2, "email": "", "createtime": 1502850351000, "updatetime": 1502850351000 }, { "id": 50, "username": "234234", "password": "23f17409b0a0140ed1f959ac9977782e", "roleName": "测试员", "status": 1, "roleId": 2, "email": "", "createtime": 1502849864000, "updatetime": 1502849864000 }, { "id": 48, "username": "qweeq", "password": "b90cbfc258ab86fc4b6fe7258240a721", "roleName": "测试员", "status": 1, "roleId": 2, "email": "", "createtime": 1502849405000, "updatetime": 1502849405000 }]
        }
    },
    components: {
        topLabel,
        operating
    },
    filters: {
        date: function (value) {
            const date = new Date(value),
            YY = date.getFullYear(),
            MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
            DD = date.getDate(),
            h = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds()
            return YY + '/' + MM + '/' + DD
        }
    }
}
</script>

<style lang="less">
@import '../assets/color';
@import '../assets/public';
.context {
    flex: 1;
    ul.table {
        margin: 0 30px;
        .shadow;
        > li {
            color: @normalText;
            height: 40px;
            line-height: 40px;
            display: flex;
            padding: 0 0 0 15px;
            &:first-child {
                color: #000000;
                font-weight: bold;
                span {
                    border-color: rgba(0,0,0,0);
                }
            }
            &:nth-child(even) {
                background-color: @themeBg;
            }
            .inlineStyle {
                flex: 1;
                font-size: 14px;
                padding: 0 6px;
                overflow: hidden;
                text-align: right;
                &:first-child {
                    text-align: left;
                }
            }
            b {
                color: @themeDark;
                .inlineStyle;
                &:last-child {
                    padding-right: 15px;
                }
            }
            span {
                border-right: 1px solid @lineColor;
                color: @remarkText;
                .inlineStyle;
                &:last-child {
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }
                > i {
                    height: 30px;
                    width: 30px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    .itn;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
    }
}
</style>
<template>
    <section>
        <Crud></Crud>
        <div class="package-table">
            <table frame=void class="tableList">
                <thead>
                    <tr>
                        <th width="40">
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" v-model="checkedAll" @click="handleCheckedAll(items, checkedAll)" />
                                <i></i>
                            </label>
                        </th>
                        <th>Project</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th width="40" class="center">State</th>
                        <th width="40" class="center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items">
                        <td>
                            <label class="checkbox-label">
                                <input type="checkbox" class="checkbox-input" v-model="item.checked" />
                                <i></i>
                            </label>
                        </td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.username }}</td>
                        <td>{{ item.createtime | date }}</td>
                        <td class="center">
                            <i class="material-icons safe_icon" v-if="!!item.state">done</i>
                            <i class="material-icons danger_icon" v-else>error</i>
                        </td>
                        <td class="center">
                            <i class="material-icons edit_icon">mode_edit</i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import Crud from './Crud'

export default {
    name: 'dataList',
    data() {
        return {
            checkedAll: false,
            checkedList: [],
            items: [
                { "id": 63, "username": "4446", "createtime": 1503027406000, "state": 1 },
                { "id": 62, "username": "gfgfss", "createtime": 1503025782000, "state": 1 },
                { "id": 59, "username": "444", "createtime": 1502862694000, "state": 1 },
                { "id": 61, "username": "666", "createtime": 1502866972000, "state": 0 },
                { "id": 60, "username": "44444", "createtime": 1502862753000, "state": 1 },
                { "id": 56, "username": "44", "createtime": 1502854185000, "state": 0 },
                { "id": 52, "username": "qwe123", "createtime": 1502851368000, "state": 1 },
                { "id": 51, "username": "qweqwe", "createtime": 1502850351000, "state": 0 },
                { "id": 50, "username": "234234", "createtime": 1502849864000, "state": 0 },
                { "id": 48, "username": "qweeq", "createtime": 1502849405000, "state": 1 }      // 是正常状态
            ]
        }
    },
    methods: {
        handleCheckedAll(arr, state) {
            arr.forEach((item) => {
                item.checked = state
            })
        },
        countChecked() {
            const arr = []
            this.items.forEach((item) => {
                !!item.checked && arr.push(item)
            })
            return arr
        },
        checkState(arr, state) {
            arr.forEach((item) => {
                if (item.checked !== state) {
                    this.checkedAll = false
                    return false
                }
            })
        }
    },
    mounted() {
        this.items.forEach((item) => {
            item.checked = this.checkedAll
        })
    },
    filters: {
        date(value) {
            const date = new Date(value),
                YY = date.getFullYear(),
                MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
                DD = date.getDate(),
                h = date.getHours(),
                m = date.getMinutes(),
                s = date.getSeconds()
            return YY + '/' + MM + '/' + DD
        }
    },
    components: {
        Crud
    }
}
</script>

<style lang="less" scoped>
@import '../assets/color';
@import '../assets/public';

section {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-sizing: border-box;
    >div.package-table {
        overflow-x: auto;
    }
    table.tableList {
        width: 100%;
        color: @tableTextColor;
        .paper;
        thead {
            background-color: @tableHightBg;
            tr {
                th {
                    font-weight: bold;
                    text-align: left;
                    padding: 8px 15px;
                    border-left: 1px solid @tableLine;
                    &:first-child {
                        border: none;
                        text-align: center;
                    }
                }
            }
        }
        tbody {
            background-color: @tableBg;
            tr {
                border-top: 1px solid @tableLine;
                &:nth-child(even) {
                    background-color: @tableHightBg;
                }
                td {
                    height: 44px;
                    padding: 0 10px;
                }
            }
        }
        .center {
            text-align: center;
        }
    }
}
@media screen and (min-width: 720px){
    section >div.package-table {
        padding: 0 30px;
    }
}
</style>
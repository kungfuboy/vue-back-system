<template>
    <ul class="label">

    </ul>
</template>
<script>
export default {
    name: 'LabelCom'
}
</script>

<style lang="less" scoped>
@import '../assets/color';
@import '../assets/public';

ul.label {
    height: 0;
    overflow: hidden;
    margin-bottom: 10px;
}

@media screen and (min-width: 720px) {
    ul.label {
        height: 50px;
        padding: 0 20px;
        background-color: @tableBg;
    }
}
</style>


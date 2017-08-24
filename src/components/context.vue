<template>
    <div class="context">
        <topLabel></topLabel>
        <operating></operating>
        <tableList></tableList>
    </div>
</template>
<script>
import topLabel from '@/components/topLabel'
import operating from '@/components/operating'
import tableList from '@/components/tableList'

export default {
    name: 'context',
    components: {
        topLabel,
        operating,
        tableList
    }
}
</script>

<style lang="less">
@import '../assets/color';

.context {
    flex: 1;
    background-color: @contextBg;
}
</style>
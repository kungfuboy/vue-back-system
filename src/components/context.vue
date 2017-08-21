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
.context {
    flex: 1;
}
</style>
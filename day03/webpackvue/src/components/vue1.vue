<template>
    <div>
        <h2> 我是标题 {{title}}，<btn :title="title"></btn></h2>
    </div>
</template>



<script type="text/ecmascript-6">
    import btn from './vue2.vue'
    export default {
        props:['title'],
        components:{
            btn
        }
    }
</script>



<style scoped>
    
</style>
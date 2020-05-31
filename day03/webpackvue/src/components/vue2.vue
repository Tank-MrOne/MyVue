<template>
    <div>
        <button @click="num++">点击了{{title}}{{num}}次</button>
    </div>
</template>



<script type="text/ecmascript-6">
    export default {
        props:['title'],
        data() {
            return {
                num : 0
            }
        },
    }
</script>



<style scoped>
    
</style>
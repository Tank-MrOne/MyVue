<template>
    <div>
        <h2>
            这个文章标题是{{title}}
            <demo1 :title="title"></demo1>
        </h2>
    </div>
</template>



<script type="text/ecmascript-6">
import demo1 from "./demo2.vue";
    export default {
        props:['title'],
        components:{
            demo1
        }
    }
</script>



<style scoped>
    
</style>
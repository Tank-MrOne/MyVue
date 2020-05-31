<template>
    <div>
        <demo1 v-for="arr in arrs" :key="arr.id" :title="arr.name"></demo1>
    </div>
</template>



<script type="text/ecmascript-6">
import demo1 from "./components/demo1.vue"
    export default {    
        components:{
            demo1
        },
        data(){
            return{
                arrs : [
                    { id:1 ,name :"name1"},
                    { id:2 ,name :"name2"},
                    { id:3 ,name :"name3"}
                ]
            }
        }
    }
</script>



<style scoped>
    
</style>    
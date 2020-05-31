<template>
    <div>
        <btn v-for="arr in arrs" :key="arr.id" :title="arr.name"></btn>
    </div>
</template>



<script type="text/ecmascript-6">
    import btn from "./components/vue1.vue"
    export default {
        components :{
            btn
        },
        data() {
            return {
                arrs :[
                    {id : 1, name : "name1"},
                    {id : 2, name : "name2"},
                    {id : 3, name : "name3"},
                    {id : 4, name : "name4"},
                    {id : 5, name : "name5"}
                ]
            }
        },
    }
</script>



<style scoped>
    
</style>
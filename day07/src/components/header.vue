<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="value"/>
        <button @click="sendValue">Search</button>
      </div>
    </section>
</template>

<script type="text/ecmascript-6">
    import {mapActions} from "vue"
    export default {
        data() {
            return {
                value : ""
            }
        },
        methods: {
            sendValue(){
                this.$store.dispatch('sendValue',this.value)    
            }
        },
    }
</script>



<style scoped>
    
</style>
<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="value"/>
        <button @click="sendVal">Search</button>
      </div>
    </section>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                value : ""
            }
        },
        methods: {
            sendVal(){
                this.$tank.$emit('sendValue',this.value);
            }
        },
    }
</script>



<style scoped>
    
</style>
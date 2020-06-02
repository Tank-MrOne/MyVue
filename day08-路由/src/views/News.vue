<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(arr) in arrs" :key="arr.id">
        {{arr.name}}
        <button type="button"
          class="btn btn-primary"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off" @click="link(arr)"> 跳转 </button>
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  data() {
    return {
      arrs:[
        {id:1,name:"tank"},
        {id:2,name:"sweet"},
        {id:3,name:"MrOne"},
        {id:4,name:"Tian"},
        {id:5,name:"love"},
      ]
    }
  },
  methods: {
    link(arr){
      this.$router.push('/home/news/info'+arr.id+'?newsName='+arr.name)
    }
  },
}
</script>



<style scoped>
</style>
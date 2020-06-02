<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <li v-for="(arr) in arrs" :key="arr.id" class="list-group-item">
        <router-link :to="'/home/message/info'+arr.id+'?msgValue='+arr.value">{{arr.value}}</router-link>
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
        {id:1,value:"人生就是长跑，跑得快一点就再也听不见身后的非议声了"},
        {id:2,value:"人生有走出来的美丽，没有等出来的辉煌"},
        {id:3,value:"即使生活低到尘埃里，梦想也要举得高高的"},
        {id:4,value:"我荒废了时间，时间便把我荒废了"},
      ]
    }
  },
};
</script>



<style scoped>
</style>
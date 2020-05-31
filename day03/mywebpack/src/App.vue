<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Left :arrs="arrs" :add="add"/>
        <Right :del="deleteC" :arrs="arrs"  />
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
import Left from './components/left.vue'
import Right from './components/right.vue'
export default {
  components: {
      Left,Right
  },
  data() {
    return {
       arrs:[
           {id:1,name:"Sweet",value:"不错"},
           {id:2,name:"Tank",value:"Nice"},
           {id:3,name:"MrOne",value:"interesting"},
       ]
    };
  },
  methods: {
      add(obj){
          this.arrs.unshift(obj)
      },
      deleteC(index){
          this.arrs.splice(index,1)
      }
  },
};
</script>



<style scoped>
</style>
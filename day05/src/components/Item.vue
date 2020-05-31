<template>
  <li  @mouseleave="mouseO(false)" @mouseenter="mouseO(true)" :class="bac">
    <label>
      <input type="checkbox" v-model="che"/>
      <span>{{todo.value}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="delV">删除</button>
  </li>
</template>
<script type="text/ecmascript-6">
export default {
  props:{
    todo:Object,
    chec:Function,
    index:Number,
    deleteV:Function
  },
  data() {
    return {
      isShow : false,
      bac:""
    }
  },
  computed: {
    che:{
      get(){
        return this.todo.isDo
      },
      set(val){
        this.chec(this.index,val)
      }
    }
  },
  methods: {
    mouseO(flag){
      this.isShow = flag 
      this.bac = flag ? "bac" : ""
    },
    delV(){
      this.deleteV(this.index)
    }
  },
};
</script>



<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.bac{
  background: #bfa;
}


</style>
<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="che" />
    </label>
    <span>
      <span>已完成{{clearNum}}</span> / 全部{{allNum}}
    </span>
    <button class="btn btn-danger" @click="delD">清除已完成任务</button>
  </div>
</template>



<script type="text/ecmascript-6">
export default {
  props:{
    todos:Array,
    allChe:Function
  },
  computed: {
    clearNum:{
      get(){
        return this.todos.filter(item => item.isDo).length
      }
    },
    allNum:{
      get(){
        return this.todos.length
      }
    },
    che:{
      get(){
        return this.allNum === this.clearNum && this.allNum>0
      },
      set(val){
        this.allChe(val)
      }
    }
  },
  methods: {
    delD(){
      this.$bus.$emit('delDo')
    }
  },
};
</script>



<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>    
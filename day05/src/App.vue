<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :todos="todos"  :addV="addV"/>
      <Main :todos="todos" :chec="chec" :deleteV="deleteV"/>
      <Footer :todos="todos" :allChe="allChe" />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Header  from './components/Header' ;
import Main from './components/Main' ;
import Footer from './components/Footer' ;
export default {
    components:{
        Header,Main,Footer
    },
    data() {
        return {
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    mounted() {
      this.$bus.$on('delDo',this.delDo)
    },
    methods: {
      addV(value){
        this.todos.unshift(value);
      },
      chec(index,flag){
        this.todos[index].isDo = flag
      },
      allChe(flag){
        this.todos.forEach(item=>item.isDo = flag)
      },
      deleteV(index){
        this.todos.splice(index,1);
      },
      delDo(){
        this.todos = this.todos.filter(item => !item.isDo)
      }
    },
    watch: {
      todos:{
        deep:true,
        handler(newVal, oldVal){
          localStorage.setItem('todos',JSON.stringify(newVal))
        }
      }
    },
};
</script>



<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
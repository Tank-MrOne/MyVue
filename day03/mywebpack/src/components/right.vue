<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
        <Content v-for="(arr, index) in arrs" :key="arr.id" :content="arr" :del="del" :index="index"/>
    </ul>
  </div>
</template>



<script type="text/ecmascript-6">
import Content from './content.vue'
export default {
    props:['arrs',"del"],
    components:{
        Content
    }
};
</script>



<style scoped>
.reply {
  margin-top: 0px;
}
</style>
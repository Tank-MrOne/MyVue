<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="del">删除</a>
    </div>
    <p class="user">
      <span>{{content.name}}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{content.value}}</p>
  </li>
</template>



<script type="text/ecmascript-6">
export default {
    props:['content','del','index'],
    methods: {
        dell(){
            del(index)
        }
    },
};
</script>



<style scoped>
li {
  transition: .5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}
</style>
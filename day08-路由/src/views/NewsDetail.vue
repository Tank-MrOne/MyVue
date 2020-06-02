<template>
  <ul class="list-group">
    <li class="list-group-item">NewsId : {{newsId}}</li>
    <li class="list-group-item">NewsContent:{{newsName}}</li>
    <li class="list-group-item">NewsTitle:</li>
  </ul>
</template>



<script type="text/ecmascript-6">
        export default {
                props:['newsId','newsName']
        }
</script>



<style scoped>
        
</style>
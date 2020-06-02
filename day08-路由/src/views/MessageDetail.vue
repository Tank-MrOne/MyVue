<template>
  <ul class="list-group">
    <li class="list-group-item">MessageId : {{msgId}}</li>
    <li class="list-group-item">MessageContent:{{msgValue}}</li>
    <li class="list-group-item">MessageTitle:</li>
  </ul>
</template>



<script type="text/ecmascript-6">
export default {
  props:['msgId','msgValue']
};
</script>



<style scoped>
</style>
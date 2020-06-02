<template>
  <div class="row">
    <div v-if="isFirst" class="btn btn-primary">初次见面请多关照</div>
    <div v-else-if="isLoading" class="btn btn-info">正常发送请求，请稍后.......</div>
    <div v-else-if="errMsg" class="btn btn-danger">请求出错，{{errMsg}} , 请重新发送</div>
    <div v-else v-for="(ar, index) in arrs" :key="ar.name" class="card">
      <a :href="ar.url" target="_blank">
        <img :src="ar.img" style="width: 100px" />
      </a>
      <p class="card-text">{{ar.name}}</p>
    </div>
  </div>
</template>



<script type="text/ecmascript-6">
import {mapGetters} from 'vuex'
export default {
  computed: mapGetters(['arr','isFirst','isLoading','errMsg']),
};
</script>



<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
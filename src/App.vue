<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const api =  `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products`;
    //"https://vue-course-api.hexschool.io/api/cashwu/products";
    console.log(process.env.API_PATH, process.env.CUSTOM_PATH);
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<style lang="scss">
@import "./assets/all";
</style>

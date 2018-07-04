<template>
  <div id="app">
    <img src="./assets/logo.png">
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

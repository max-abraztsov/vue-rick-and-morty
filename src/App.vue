<template>
  <NavBar></NavBar>
  <div class="app">
      <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
  import NavBar from "@/components/UI/NavBar.vue"
  import Footer from "@/components/UI/Footer.vue"
  export default {
      components: {
          NavBar,
          Footer,
      }
  }
</script>

<style >
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  .app{
      padding: 10px;
  }
</style>
<template>
  <div id="app">
      <navbar></navbar>
      <div class="">
          <router-view />
      </div>
  </div>
</template>







<script>



  export default {


    created() {
      // this.$store.dispatch('UserID' )
    }
  }
</script>



<style>
/*body{*/
/*  background-color: #ddd;*/
/*}*/
</style>

<template>
  <div  >
<!--    <div  class="uk-visible@m uk-child-width-1-3@m  uk-grid-divider uk-margin-remove"   uk-grid>-->
<!--       <div>-->
<!--         <div class="uk-card uk-align-center">-->
<!--           <Grid></Grid>-->
<!--         </div>-->
<!--       </div>-->
<!--       <div class="" >-->
<!--         <div class="scroll" style="height: 500px;overflow: auto;" >-->
<!--           <cor></cor>-->
<!--           <userMemes></userMemes>-->
<!--         </div>-->
<!--       </div>-->
<!--       <div>-->
<!--         <div class="uk-card ">-->
<!--           <frens></frens>-->
<!--         </div>-->
<!--       </div>-->

<!--     </div>-->


      <div  class="row ">
          <div class="col-md-3 ">
              <div class="uk-card  ">
                  <Grid></Grid>
              </div>

          </div>
          <div class="col-md-6" >
              <div class="scroll" style="height: 500px;overflow: auto;" >
                  <cor></cor>
                  <userMemes></userMemes>
              </div>
          </div>
          <div class="col-md-3">
              <div class="uk-card ">
                  <frens></frens>
              </div>
          </div>
      </div>
   <div style=" background: #e9ebee;max-height: 1000px">
     <hr class="uk-margin-remove">
     <div >
       <topMemes></topMemes>
       <timestamp></timestamp>

     </div>
   </div>
    <div class="uk-hidden@m">
      <Grid></Grid>
      <cor></cor>
      <frens></frens>
    </div>


  </div>
</template>

<script>
import cor from "@/components/frames/corousel";
import but from "@/components/frames/buttons";
import about from "@/components/pages/about";

export default {
  name: "GMap",
  props: ["alias"],
  components: {
    cor,
    but,
    about
  },
  mounted() {
    // UIkit.offcanvas('#offcanvas-usage').show()
    // window.location.reload()
  },
  data() {
    return {
      image:'user.svg'
    };
  },
  created() {
    this.$store.dispatch("IDs");
  }
};
</script>

<style scoped>
  .scroll::-webkit-scrollbar {
    display: none;
  }
</style>

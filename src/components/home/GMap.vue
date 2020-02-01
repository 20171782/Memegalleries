<template>
  <div>
    <div class="container-fluid" >

      <div  class="row col-md-12  uk-grid-divider">
          <div class="col-md-2 ">
              <div class="uk-card  ">
                  <Grid></Grid>
              </div>

          </div>
          <div class="col-md-5" >
              <div class="scroll" style="height: 700px;overflow: auto;" >
                  <cor></cor>
                  <userMemes></userMemes>
              </div>
          </div>
          <div class="col-md-3">
              <div class="uk-card ">
                  <frens></frens>
              </div>
          </div>

          <div class="col-md-2">
             <div class="uk-text-center">
                 jkfjsfjsfl
             </div>
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
import { mapGetters } from "vuex";
export default {
  name: "GMap",
  props: ["alias"],
  components: {
    cor,
    but,
    about
  },
    computed: {
        ...mapGetters(["loading"]),
    },
  mounted() {
    // UIkit.offcanvas('#offcanvas-usage').show()

  },
  data() {
    return {
      image:'user.svg'
    };
  },
  created() {
    this.$store.dispatch("IDs");

  },

};
</script>

<style scoped>
  .scroll::-webkit-scrollbar {
    display: none;
  }
</style>

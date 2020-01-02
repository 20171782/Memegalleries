<template>
  <div  style="background: #e9ebee">
    <div>
      <navbar></navbar>
    </div>
    <topMemes></topMemes>
     <div class="">
       <cor></cor>
     </div>
    <div style="margin: 10px "  uk-grid>
      <div>
        <div class="uk-card uk-align-left">
          <Grid></Grid>
        </div>
      </div>
      <div>
        <div class="uk-card">
          <timestamp></timestamp>
        </div>
      </div>
      <div>
        <div class="uk-card ">
          <frens></frens>
        </div>
      </div>
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
    /**/
</style>

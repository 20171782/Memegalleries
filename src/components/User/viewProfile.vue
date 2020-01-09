<template>
  <div style="height: 400px;border-radius: 5px" class="uk-container uk-overlay uk-overlay-primary   uk-background-cover " data-src="https://cdn.pixabay.com/photo/2017/10/26/17/52/abstract-2891890__340.jpg" uk-img>
      <div class="">
          <div  v-for="test in crabs"  >

              <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
                  <div>
                      <h4 class="uk-heading-bullet"> {{ID}}'s Profile</h4>
                      <div class="col try" style="margin: 20px">
                          <div v-if="test.image" >
                              <img class="" :src="test.image" alt="Avatar" style="border: solid #fed100">
                          </div>
                          <div v-else>
                              <photo></photo>
                          </div>

                          <p><i class="fa fa-user"></i>  {{test.name}}</p>
                          <p><i class="fa fa-hourglass-2"></i>  {{test.age}} years old</p>

                      </div>
                  </div>
                  <div>
                      <div >
                          <h4 class="uk-heading-bullet">Contact Information</h4>
                          <p><i class="fa fa-fa fa-envelope-open"></i> {{test.email}}</p>
                          <p><i class="fa fa-phone-square"></i> {{test.phone}}</p>


                          <h4 class="uk-heading-bullet" style="margin-top: 50px">General Information</h4>
                          <p><i class="fa fa-users"></i> {{test.stat}}</p>
                          <p><i class="fa fa-briefcase"></i> {{test.job}}</p>
                          <p v-if="test.gender[0]=='male'"><i class="fa fa-male"></i> {{test.gender[0]}}</p>
                          <p v-if="test.gender[0]=='female'"><i class="fa fa-female"></i> {{test.gender[0]}}</p>


                          <p><i class="fa fa-map"></i>{{test.address}}</p>

                      </div>
                  </div>
                  <div>
<!--                      <div >-->

<!--                          <update></update>-->
<!--                      </div>-->
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import update from '@/components/User/UpdateProfile'
import firebase from "firebase";
export default {
  name: "Profile",
    components:{
        update
    },
  data() {
    return {

        crabs:[],


    };
  },


computed:{
ID(){
    return this.$route.params.id
}
},

  methods: {

  },
  created() {
     this.$store.dispatch('ViewProfiles',this.crabs)




  }
};
</script>

<style scoped>
  h4{
    margin-top: -7px;
  }
  img {
      width: 50%;
      height: 50%;
      border-radius: 90% !important;
  }

    .try p{
/*margin-left: 0px;*/
        margin-top: 25px;
    }

  i{margin-right: 15px;
      font-size: 1.5em;
      margin-top: 5px;
      color: #009b3a;
  }

p{
    color: white;
}

</style>

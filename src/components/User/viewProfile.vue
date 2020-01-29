<template>
  <div class="">
      <div class="uk-container uk-margin-large-top">
          <div  v-for="test in crabs"  >

              <div class="uk-child-width-1-2@m uk-grid-small   " uk-grid>
                  <div class="col-md-4 " >
                          <div v-if="test.image" >
                              <img :src="test.image" alt="Avatar" style="border: solid #fed100">
                          </div>

                </div>
                  <div class="">
                      <h1 class="uk-heading-line uk-text-muted"><span>{{ID}}'s Profile</span></h1>
                      <div class=" uk-margin-top" uk-grid>
                          <div class="uk-text-bold">
                              {{getMemeCount(test)}} Post
                          </div>
                          <div>
                            frens
                          </div>
                          <div>
                             Generated Memes
                          </div>
                      </div>
                      <h6 class="uk-margin-top">{{test.name}}</h6>
                  </div>


              </div>





<!--              <div>-->
<!--                  <div >-->
<!--                      <h4 class="uk-heading-bullet">Contact Information</h4>-->
<!--                      <p><i class="fa fa-fa fa-envelope-open"></i> {{test.email}}</p>-->
<!--                      <p><i class="fa fa-phone-square"></i> {{test.phone}}</p>-->


<!--                      <h4 class="uk-heading-bullet" style="margin-top: 50px">General Information</h4>-->
<!--                      <p><i class="fa fa-users"></i> {{test.stat}}</p>-->
<!--                      <p><i class="fa fa-briefcase"></i> {{test.job}}</p>-->
<!--                      <p v-if="test.gender[0]=='male'"><i class="fa fa-male"></i> {{test.gender[0]}}</p>-->
<!--                      <p v-if="test.gender[0]=='female'"><i class="fa fa-female"></i> {{test.gender[0]}}</p>-->

<!--                      <p><i class="fa fa-user"></i>  {{test.name}}</p>-->
<!--                      <p><i class="fa fa-hourglass-2"></i>  {{test.age}} years old</p>-->
<!--                      <p><i class="fa fa-map"></i>{{test.address}}</p>-->

<!--                  </div>-->
<!--              </div>-->
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
        loadedMemes:[]


    };
  },


computed:{
ID(){
    return this.$route.params.id
}
},

  methods: {
      getMemeCount(item) {
          var count = 0;
          for (var item1 in this.loadedMemes) {
              if (item.id === this.loadedMemes[item1].user_id) {
                  count = count + 1;
              } else {
              }
          }
          return count;
      }
  },
  created() {
     this.$store.dispatch('ViewProfiles',this.crabs)
     this.$store.dispatch('loadMemes',this.loadedMemes)




  }
};
</script>

<style scoped>

    img {
        width: 200px;
        height: 200px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid #fed100 ;

    }



  i{margin-right: 15px;
      font-size: 1.5em;
      margin-top: 5px;
      color: #009b3a;
  }



</style>

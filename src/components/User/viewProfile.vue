<template>
  <div >
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
                      <div class=" uk-margin-large-top" uk-grid>
                          <div>
                           <h5 class="uk-heading-bullet">{{getPointsCount(test)}} Post</h5>
                          </div>
                          <div>
                            <h5 class="uk-heading-bullet" >frens</h5>
                          </div>
                          <div>
                              <h5 class="uk-heading-bullet" >Generated Memes</h5>
                          </div>
                      </div>
                      <h6 class="uk-margin-large-top">{{test.name}}</h6>
                  </div>


              </div>

              <div class="uk-margin-top uk-align-center" >
                  <ul uk-tab="" uk-grid>
                      <li><a href="#" uk-icon="user"></a></li>
                      <li><a href="#" uk-icon="image" > </a></li>
                      <li><a href="#" uk-icon="camera"></a></li>

                  </ul>

                  <ul class="uk-switcher uk-margin">

                      <li>
                          <div>
                              <div class="icon">
<!--                                  <p v-if="Admin"><img width="30" height="30" src="@/assets/admin.png" alt="">Admin User</p>-->
                                  <h4 class="uk-heading-bullet">Contact Information</h4>
                                  <p><i class="fa fa-fa fa-envelope-open"></i> {{test.email}}</p>
                                  <p><i class="fa fa-phone-square"></i> {{test.phone}}</p>


                                  <h4 class="uk-heading-bullet" style="margin-top: 50px">General Information</h4>
                                  <p><i class="fa fa-users"></i> {{test.stat}}</p>
                                  <p><i class="fa fa-briefcase"></i> {{test.job}}</p>
                                  <p v-if="test.gender[0]=='male'"><i class="fa fa-male"></i> {{test.gender[0]}}</p>
                                  <p v-if="test.gender[0]=='female'"><i class="fa fa-female"></i> {{test.gender[0]}}</p>

                                  <p><i class="fa fa-user"></i>  {{test.name}}</p>
                                  <p><i class="fa fa-hourglass-2"></i>  {{test.age}} years old</p>
                                  <p><i class="fa fa-map"></i>{{test.address}}</p>

                              </div>
                          </div>
                      </li>
                      <li  >
                          <div >
                              <div   class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
                                  <div class="coupon  uk-text-center" v-for="(meme,index) in getMemes(test)" :key="index">
                                      <div class="uk-inline-clip uk-transition-toggle uk-light" tabindex="0">
                                          <img :src="meme.image" alt="">
                                          <div class="uk-overlay-primary uk-position-cover"></div>
                                          <div class="uk-position-center">
                                              <div class="uk-transition-slide-top-small">
                                                  <div style="color: white" class="uk-text-bold"  uk-grid>
                                                      <div>
                                                          <div>
                                                             <i class="fa fa-thumbs-up"></i>
                                                              <span class="uk-margin-remove-left uk-text-middle">{{getLikeCount(meme)}}</span>
                                                        </div>
                                                      </div>
                                                      <div>
                                                          <div>
                                                             <i class="fa fa-thumbs-down"></i>
                                                              <span class="uk-margin-remove-left uk-text-middle">{{getdisLikeCount(meme)}}</span>
                                                        </div>
                                                      </div>

                                                      <div>
                                                          <div>
                                                             <i class="fa fa-comments"></i>
                                                              <span class="uk-margin-remove-left uk-text-middle">{{getCommentsCount(meme)}}</span>
                                                        </div>
                                                      </div>
                                                  </div>
                                              </div>

                                          </div>
                                      </div>
                                      <p class="uk-margin-small-top">Small Top + Bottom</p>
                                  </div>

                              </div>
                          </div>

                      </li>

                      <li><testing></testing></li>




                  </ul>
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
        Memes:[],
        likes:[],
        dislikes:[],
        comments:[]



    };
  },


computed:{
ID(){
    return this.$route.params.id
}
},

  methods: {
      getPointsCount(item) {
          var count = 0;
          for (var item1 in this.Memes) {
              if (item.id === this.Memes[item1].user_id) {
                  count = count + 1;
              } else {
              }
          }
          return count;
      },
      getMemes(item) {
          var userMemes = [];
          for (var item1 in this.Memes) {
              if (item.id === this.Memes[item1].user_id) {
                  userMemes.push(this.Memes[item1]);
              } else {
              }
          }
          return userMemes;
      },
      getLikeCount(item) {
          var count = 0;
          for (var item1 in this.likes) {
              if (item.Meme_id === this.likes[item1].Meme_id) {
                  count = count + 1;
              } else {
              }
          }
          return count;
      },
      getdisLikeCount(item) {
          var count = 0;
          for (var item1 in this.dislikes) {
              if (item.Meme_id === this.dislikes[item1].Meme_id) {
                  count = count + 1;
              } else {
              }
          }
          return count;
      },
      getCommentsCount(item) {
          var count = 0;
          for (var item1 in this.dislikes) {
              if (item.Meme_id === this.comments[item1].Meme_id) {
                  count = count + 1;
              } else {
              }
          }
          return count;
      },
  },
    computed: {
        Admin(){
            return this.$store.state.Admin
        }
    },
  created() {
     this.$store.dispatch('ViewProfiles',this.crabs)
     this.$store.dispatch('loadMemes',this.Memes)
      this.$store.dispatch('fetchLikes',this.likes);
      this.$store.dispatch('disLikes',this.dislikes);
      this.$store.dispatch('fetchComment',this.comments);



  }
};
</script>

<style scoped>

    .col-md-4 img {
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
      color: white;
  }

    .uk-inline-clip img{
        height:250px;
        width:500px;
        border-radius: 5px;
    }
.icon i{
    color:green;
}
</style>

<template>
  <div class=" " style="">
<div class="">
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
   <div >
     <nav class="uk-navbar-container header-holder tt-logo-center" uk-navbar>
       <div class="uk-navbar-left ">

         <ul class="uk-navbar-nav jump" style="height: 90px">
           <li   style="margin-top: 10px " > <router-link to="/GMap/Animated"><a ><img  src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png" width="40" height="40" alt=""/></a></router-link></li>
<!--           <li style="margin-top: 20px" ><hr class="uk-divider-vertical" ></li>-->
           <li style="margin-top: 15px" class="list"><a href="" ma><h2>Meme Galleries</h2></a></li>
         </ul>
       </div>

       <div class="uk-visible@m uk-navbar-center">
         <ul class="uk-navbar-nav">
           <li class="">

            <users></users>

           </li>
         </ul>
       </div>



       <div class="uk-navbar-right uk-visible@l ">

         <ul class="uk-iconnav uk-navbar-nav">

           <li v-if="Admin"><router-link to="/admin"><a href="#"  style=""><img width="30" height="30" src="@/assets/admin.png" alt=""></a></router-link></li>
           <li v-if="user"><router-link to="/about"><a href="#"  style=""><i class="fas fa-grin-alt"></i></a></router-link></li>
           <li v-if="!user"><router-link to="/signup"><a href="#"  style=""><i class="fa fa-sign-out"></i></a></router-link></li>
           <li v-if="!user"><router-link :to="{ name: 'login' }"><a href="#"  style=""><i class="fa fa-unlock"></i></a></router-link></li>
           <li v-if="user"><router-link to="/about"><a href="#"  style=""><i class="fa fa-shopping-cart"></i></a></router-link></li>
           <li v-if="user"><router-link to="/about"><a  @click="logout" href="#"  style=""><i class="fa fa-sign-out"></i></a></router-link></li>
           <li v-if="user"><router-link to="/about"><a href="#"  style=""><pro></pro></a></router-link></li>

         </ul>
       </div>
     </nav>
   </div>
  </div>



<!--  small nav-->
<nav>
    <div class="uk-navbar-right uk-hidden@l uk-text-justify">
      <div style="" class="uk-navbar-right" >
        <ul class="uk-navbar-nav"  >
          <li><a href="#offcanvas-slide" uk-toggle ><span uk-icon="menu" style="width:30px;color: #FF2500;"></span></a></li>
        </ul>
      </div>


      <div id="offcanvas-slide" uk-offcanvas>

        <div class="uk-offcanvas-bar">

          <a href="http://www.ncu.edu.jm" class="uk-button-link uk-text-center uk-align-center ">
            <img src="https://cdn.pixabay.com/photo/2012/04/26/19/07/crab-42880__340.png"  alt=""  style="width:100px;padding-top:50px">
          </a>

          <div class="uk-width-1-1@s small">
            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: false">
              <li v-if="user  && Admin ">
                <router-link to="/about"
                ><i class="fas fa-grin-alt">Admin Page</i></router-link
                >
              </li>

              <li v-if="user">
                <router-link to="/about"
                ><i class="fas fa-grin-alt">about us</i></router-link
                >
              </li>

              <li v-if="!user">
                <router-link to="/signup"
                ><i class="fa fa-sign-out">Signup</i></router-link
                >
              </li>
              <li v-if="!user">
                <router-link :to="{ name: 'login' }"
                ><i class=" fa fa-unlock">Login</i></router-link
                >
              </li>
              <li v-if="user">
                <a href=""> <i class="fa fa-shopping-cart">cart</i></a>
              </li>
              <li v-if="user">
                <a href=""
                ><i class="fa fa-user">{{ user.email }}</i></a
                >
              </li>


              <li v-if="user">
                <a href="" @click="logout"><i class="fa fa-sign-out">logout</i></a>
              </li>

              <li v-if="user">
                <a href="" ><pro></pro></a>
              </li>


            </ul>
          </div>

        </div>
      </div>


    </div>

  </nav>
</div>


  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";

export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      user: null,
      password: "",
      alias: null
    };
  },
  computed: {
    Admin(){
      return this.$store.state.Admin
    }
  },
  methods: {
    logout() {

      firebase
        .auth()
        .signOut().then(()=>{
        this.$router.push({name:'login'});
      })

    },
    home(){
      this.$router.push({name:'GMap',params:{id:'Animated'}})
      window.location.reload()
    }
  },
  created() {
    this.$store.dispatch('IsAdmin')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = user;
      }
    });
    if (this.user) {
      db.collection("Profile")
        .where("id", "==", this.user.uid)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.alias = doc.data().alias;
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>

<style scoped>
    .header-holder.tt-logo-center {
        /*background-image: linear-gradient(to bottom, #fed100, #009b3a  84%);*/
        /*-pie-background: linear-gradient(to bottom, #fed100, #009b3a  84%);*/
      background-color: white;
      border-bottom: 1px solid  #e9ebee;
      opacity: 0.9;
    }

i {

  font-size: 1.4em;

  color: black;

}
span{
  color: black !important;
}



    h2{
      font-family: 'Titan One', cursive;
      font-size: 24px;
      font-weight: 400;
      line-height: 1.1;

    }

    @media only screen and (max-width: 600px) {
      h2{
        font-family: 'Titan One', cursive;
        font-size: 20px;
        font-weight: 400;
        line-height: 1.1;

      }
      img{
        width: 40px;
      }
    }
</style>

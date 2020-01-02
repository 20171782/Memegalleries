<template>
<div class="top uk-section-muted">

 <div  class="uk-container ">
   <form action="" @submit.prevent="press">
     <div class="uk-child-width-1-5@m uk-grid-small uk-grid-match uk-margin  " uk-grid>
       <div>
         <div>
           <i class="fa fa-link" @click="Likes"></i>
           <input class="uk-radio" name="group1" type="radio" value="mostLikes" v-model="mostLikes"/>
           <span >Most Liked</span>
         </div>
       </div>


       <div>
         <div>
           <i class="fa fa-link" @click="Comments"></i>
           <input class="uk-radio" name="group1" type="radio" value="mostComments" v-model="mostComments"/>
           <span>Most Comments</span>
         </div>
       </div>



       <div>
         <div>
           <i class="fa fa-link" @click="myMemes"></i>
           <input class="uk-radio" name="group1" type="radio" value="myMemes" v-model="mine"/>
           <span>My Memes </span>
         </div>
       </div>

       <div>
         <div>
           <i class="fa fa-link" @click="mostRecent"></i>
           <input class="uk-radio" name="group1" type="radio" value="Recent" v-model="recent"/>
           <span>Most Recent </span>
         </div>
       </div>

       <div>
         <div>
           <span><i @click="press" class="fa fa-link "></i></span>
           <select class=""  v-model="cat" >
             <option  v-for="(cat, index) in Cats" :key="index" >{{
               cat.name
               }}</option>
           </select>
         </div>
       </div>

     </div>

   </form>
 </div>




</div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "topMemes",
  data() {
    return {
      cat: "",
      recent:"",
      chosen: "",
      mostComments:"",
      mostLikes:"",
      user: firebase.auth().currentUser.uid,
      mine:null
    };
  },
  computed: {
    Cats() {
      return this.$store.state.categories;
    }
  },
  methods: {
    press() {
      if (this.cat) {
        db.collection("category").doc(this.user).delete()
        db.collection("category").doc(this.user)
                .set({
                  category: this.cat
                }).then(() => {
          db.collection("category").doc(this.user)
          this.$router.push({name: "GMap", params: {id: this.chosen}});
          window.location.reload()
        })
      }
    },

    mostRecent() {
      if (this.recent) {
        this.$router.push({name: "GMap", params: {id: this.recent}})
        window.location.reload()
      }
    },
    myMemes() {
      if (this.mine) {
        this.$router.push({name: "GMap", params: {id: this.mine}})
        window.location.reload()
      }
    },
    Comments() {
      if (this.mostComments) {
        this.$router.push({name: "GMap", params: {id: this.mostComments}})
        window.location.reload()
      }
    },
    Likes() {
      if (this.mostLikes) {
        this.$router.push({name: "GMap", params: {id: this.mostLikes}})
        window.location.reload()
      }
    },

  },
  created() {
    db.collection("category").onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          this.chosen = change.doc.data().category;
        }
      });
    });
  }
};
</script>

<style scoped>
button {
  margin-left: 10px;
}

input,i,span{margin: 2px}
  label span{color: black}
  i{font-size: 30px;color:#009b3a  }
  .cat{
    width: 200px;
  }


input:checked ~ {
  background-color: black;
}
  .form-control{
    width:30%
  }


  .top{
    padding-top: 50px;
    background: #e9ebee;
  }
</style>

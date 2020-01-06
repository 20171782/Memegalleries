<template>
   <div>
       <div v-for="crab in crabs">
           <div class="">
               <img
                       class="uk-border-circle"

                       :src="crab.image"
               />
<!--               <span> {{ crab.name }}</span>-->
           </div>

       </div>
   </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "pro",
        data(){
          return{
              crabs:[],
              id:firebase.auth().currentUser.uid,
          }
        },
        created() {
            db.collection("Profile")
                .where('id','==',this.id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.crabs.push(doc.data())

                    });
                })
                .catch(error => {
                    console.log("Error getting documents: ", error);
                });

            this.$store.dispatch('IDs')
        },
    }
</script>

<style scoped>
img{width: 50px;
    height: 50px;
    border: 3px solid #fed100}
/*background-image: linear-gradient(to bottom, #fed100, #009b3a  84%);*/
</style>

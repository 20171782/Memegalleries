<template>
   <div class="">
       <div class="uk-section-muted">
           <div class="uk-container uk-container-small">
               <div class="uk-margin-large-top">
                   <h2>Admin Page</h2>
                   <div class="uk-card-default">
                       <div class="padding" v-for="profile in Profile" :key="profile.id">
                           <div class="uk-grid-small uk-flex-middle" uk-grid>
                               <div class="uk-width-auto">
                                   <img class="uk-border-circle" width="40" height="40" :src="profile.image">
                               </div>
                               <div class="uk-width-expand">
                                   <h3 class="uk-card-title uk-margin-remove-bottom">{{profile.alias}}</h3>
                                   <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">{{profile.email}}</time></p>
                               </div>


                               <button v-if="profile.Admin" @click="admin(profile.email,profile.id)" class="uk-button uk-button-primary">Admin User</button>
                               <button v-else @click="admin(profile.email,profile.id)" class="uk-button uk-button-primary">Make Admin</button>



                               <button @click="Disabled(profile.email,profile.id)" class="uk-button uk-button-primary">Disable Account</button>
                           </div>

                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    import firebase from "firebase";
    import UIkit from 'uikit'
    import db from '@/firebase/init'
    import {fb} from "@/firebase/init";
    export default {
        name: "admin",
        data(){
            return {
                Profile:[],

            }
        },
        methods:{
            admin(email,id){
                const func = firebase.functions();
                const adminRoles = func.httpsCallable('addAdminRole');
                adminRoles({email:email}).then((result) =>{
                    console.log(result)
                }).then(()=>{
                db.collection('Profile').doc(id).update({
                        Admin: true
                    }).then(()=>{
                        alert(email + '' + 'has been made admin')
                })
                })
            }  ,


            Disabled(email,id){
                const func = firebase.functions();
                const DisableAccount = func.httpsCallable('UpdateUser');
                DisableAccount({email:email}).then((result) =>{
                    console.log(result)
                }).then(()=>{
                   db.collection('Profile').doc(id).update({
                       disable: true
                    });
                })
            }

        },
        firestore(){
            return {
                Profile: db.collection('Profile'),

            }
        },

        mounted() {
            this.$binding("Profile", fb.collection("Profile").where('Meme_id', '==', this.ids))
                .then((ford) => {
                    this.Profile === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })


        }
    }
</script>

<style scoped>
.uk-grid-small{
    margin-bottom: 20px;
}
img {
    width: 70px;
    height: 70px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid #fed100 ;

}
button{
    border-radius: 10px;
    background-color:  rgba(0, 155, 58, 0.9);
    margin-left: 10px;
}
    .padding{
        padding:10px 20px 1px 20px ;
    }
</style>

<template>
    <div class=" uk-container "  >



        <div class="uk-child-width-1-2@m " v-if="frens.length !=0 || Friends.length !=0" uk-grid >
            <div class="">
                <div class="uk-card-header" >

                    <!--  For who sends fren request -->

                    <div class="uk-card uk-card-default" style="" >

                        <div class="">
                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-search"></i></div>
                                </div>
                                <input  type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
                            </div>
                        </div>
                    </div>

                    <div class="uk-card uk-card-default" style=" background: #e9ebee;border-radius: 15px 15px 1px 1px ;margin-top: 10px" >
                        <div class="uk-card-header">
                            <h3 class="uk-text-bold" >Your Frens</h3>
                        </div>

                    </div>


                    <!--for received fren request-->
                    <div class="uk-card uk-card-default " v-for="requests in frens" style=" background: #e9ebee;">
                        <div class="uk-card-header" @click="convo(requests.request_id,requests.requester,requests.myAlias,requests.requesterImage)">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="" width="40" height="40" :src="requests.requesterImage">
                                </div>
                                <div class="uk-width-expand">
                                    <router-link :to="'/profile/' + requests.myAlias " ><span class=" " style="color: black">{{requests.myAlias }}</span></router-link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <!--  For who send fren request -->
                    <div  class="uk-card uk-card-default me" v-for="requests in Friends"  style=" background: #e9ebee;" >
                        <div class="uk-card-header" @click="convo(requests.request_id,requests.user_requested,requests.userRequestedAlias,requests.user_requestedImage)">
                            <div class="uk-grid-small uk-flex-middle" uk-grid :id="requests.user_requested">
                                <div class="uk-width-auto">
                                    <img class="" width="40" height="40" :src="requests.user_requestedImage">
                                </div>
                                <div class="uk-width-expand">
                                    <span class=" " style="color: black">{{ requests.user_requestedName}}</span>

                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>







             <div>
                 <div class="">
                     <div  v-for="message in Messages" :key="message.timestamp"  >

                       <div  v-if="message.user_from == id" >
                           <div   style="float:left  ;background-color: #0e6dcd;padding:15px;margin: 15px">
                               {{message.user_from}}<br> {{message.msg}}
                           </div>
                       </div>

                        <div v-else   >
                            <div style="float:right;background-color:white;padding:5px;margin: 20px" >
                                {{message.user_from}}<br> {{message.msg}}
                            </div>
                        </div>

                     </div>
                 </div>




                 <form @submit.prevent="PrivateMsg" class="uk-margin-large-top">
                     <div class="form-group">
                         <input type="text" class="form-control"  v-model="msg">
                     </div>


                     <div class="uk-alert-danger" uk-alert v-show="feedback">
                         <a class="uk-alert-close" uk-close></a>
                         <p>{{feedback}}</p>
                     </div>
                     <div class="uk-alert-danger" uk-alert v-show="success">
                         <a class="uk-alert-close" uk-close></a>
                         <p>{{success}}</p>
                     </div>





                     <button type="submit" class="btn btn-primary" :disabled="!Convo_ID">Submit</button>

                 </form>
             </div>

            </div>


        <!--  Smiley face if dont have any frens   -->

        <div v-else>
            <h3>You have no frens</h3>
            <hr>

            <span style='font-size:200px;'>&#128577;</span>
        </div>


        </div>






</template>


<script>
    import UIkit from "uikit";
    import db from "@/firebase/init";
    import firebase from "firebase";
    import {fb} from "@/firebase/init";
    export default {
        name: "admin",
        data(){
            return{
                frens:[],
                Friends:[],
                id: firebase.auth().currentUser.uid,
                msg:'',
                Convo_ID:'',
                user_to:'',
                feedback:'',
                success:'',
                Messages:[],
                RequestedAlias:'',
                user_requestedImage:'',
                crabs:[],


            }
        },
        methods:{
            PrivateMsg(){

               if(this.Convo_ID && this.msg){
                 var info = {user_from:this.id,
                              user_to:this.user_to,
                            ConID:this.Convo_ID,
                             timestamp:Date.now(),
                             msg:this.msg,
                             status:1,
                             image:this.user_requestedImage,
                     alias:this.RequestedAlias
                 }
                db.collection('PrivateMessages').add(info).then(()=>{
                    this.success = 'message sent'
                })
               }else{
                 this.feedback = 'You need to a message'
               }
            },
            convo(id,user_to,RequestedAlias,user_requestedImage){

                console.log(id,user_to,this.id,RequestedAlias,)

            let crab = {user_from:this.id,
                         user_to:user_to,
                         timestamp:Date.now(),
                           id:id,
                requestedAlias:RequestedAlias}

            this.Convo_ID = id
            this.RequestedAlias = RequestedAlias,
            this.user_requestedImage = user_requestedImage
            this.user_to = user_to
            let me = db.collection('conversation').doc(id)
            me.get().then(doc =>{
                if(doc.exists){
                    this.Messages=[]
                    db.collection("PrivateMessages").where("ConID", "==", id)
                        .onSnapshot((snapshot)=> {
                            snapshot.docChanges().forEach((change)=> {
                                if (change.type === "added") {
                                    this.Messages.push(change.doc.data())
                                }
                            });
                        })

                }else{
                  me.set(crab).then(()=>{
                      this.Messages = 'There are no messages'
                  })

                }
            })



            }
        },
        computed:{
           MyImage(){
               return this.crabs.map((map)=>{
                  return map.image
               })
           } ,
           Alias(){
               return this.crabs.map((map)=>{
                  return map.alias
               })
           }
        },
        firestore() {
            return {
                frens: fb.collection('friendships'),
                Friends: fb.collection('friendships')
            }
        },
        created() {
            this.$binding("frens", fb.collection("friendships").where('user_requested', '==', this.id).where('status','==',1))
                .then((ford) => {
                    this.frens === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })
            this.$binding("Friends", fb.collection("friendships").where('requester', '==', this.id).where('status','==',1).where('check','==',1))
                .then((ford) => {
                    this.Friends === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })

            db.collection("Profile").where("id", "==", this.id)
                .onSnapshot((snapshot)=> {
                    snapshot.docChanges().forEach((change)=> {
                        if (change.type === "added") {
                            this.crabs.push(change.doc.data())
                        }
                    });
                })
        }

    }
</script>

<style scoped>
    button {
        background-color: #009b3a;
        /*background-color: #e9ebee;*/


    }


    input{
        background-color: #e9ebee;
    }

</style>

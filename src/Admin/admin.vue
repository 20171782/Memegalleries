<template>
    <div class=" "  >


        <div class="row col-md-12 "  v-if="frens.length !=0 || Friends.length !=0" uk-grid >
            <div class="col-md-4">

                <div class="uk-card-header" >
                    <pro></pro>
                    <br>
                    <!--  For who sends fren request -->
                    <div class="uk-card uk-card-default" style="" >
                        <div class="">
                            <label class="sr-only" for="inlineFormInputGroup">Username</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fa fa-search"></i></div>
                                </div>
                                <input v-model="search"  type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
                            </div>
                        </div>
                    </div>

                    <div class="uk-card uk-card-default" style=" background: #e9ebee;border-radius: 15px 15px 1px 1px ;margin-top: 10px" >
                        <div class="uk-card-header">
                            <h3 class="uk-text-bold" >Your Frens</h3>
                        </div>

                    </div>


                    <!--for received fren request-->
                    <div class="uk-card uk-card-default " v-for="requests in filteredfrens" style=" background: #e9ebee;">
                        <div class="uk-card-header" @click="convo(requests.request_id,requests.requester,requests.myAlias,requests.requesterImage)">
                            <div class="uk-grid-small uk-flex-middle" uk-grid>
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="40" height="40" :src="requests.requesterImage">
                                </div>
                                <div class="uk-width-expand">
                                    <router-link :to="'/profile/' + requests.myAlias " ><span class=" " style="color: black">{{requests.myAlias }}</span></router-link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <!--  For who send fren request -->
                    <div  class="uk-card uk-card-default me" v-for="requests in filteredFren"  style=" background: #e9ebee;" >
                        <div class="uk-card-header" @click="convo(requests.request_id,requests.user_requested,requests.userRequestedAlias,requests.user_requestedImage)">
                            <div class="uk-grid-small uk-flex-middle" uk-grid :id="requests.user_requested">
                                <div class="uk-width-auto">
                                    <img class="uk-border-circle" width="40" height="40" :src="requests.user_requestedImage">
                                </div>
                                <div class="uk-width-expand">
                                    <span class=" " style="color: black">{{ requests.userRequestedAlias}}</span>

                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>

            <div class="Image col-md-8" style="">
                 <div class="">
                     <div  v-for="message in Messages" :key="message.timestamp"  >
                         <div  v-if="message.user_from == id" >
                           <div class="mint uk-card  uk-card-body"  style="float:left ;background-color: #009b3a;padding:15px;margin: 15px;text-align: left ">
                               <article class="uk-comment">
                                   <header class="uk-comment-header uk-grid-small " uk-grid>
                                       <div class="uk-width-auto">
                                           <img width="20"  height="30" class="uk-border-circle" :src="message.image" alt="">
                                       </div>
                                       <div class="uk-width-expand uk-margin-remove-left">
                                           <p style="font-weight: bold" class=" uk-margin-remove"><a class="uk-link-reset" href="#">{{message.alias[0]}}</a></p>
                                           <ul class="uk-comment-meta uk-subnav  uk-margin-remove-top">
                                               <li><a style="color: white" href="#">{{message.timestamp|formatDate}}</a></li>
                                               <li><a href="#"></a></li>
                                           </ul>
                                       </div>
                                   </header>
                                   <div class="uk-comment-body">
                                       <p>{{message.msg}}</p>
                                   </div>
                               </article>
                           </div>
                       </div>

                        <div v-else   class="">
                            <div class="mint uk-card uk-card-default uk-card-body" style="float:right;background-color:white;padding:15px;margin: 20px" >
                                <article class="uk-comment">
                                    <header class="uk-comment-header uk-grid-small " uk-grid>
                                        <div class="uk-width-auto">
                                            <img width="20"  height="30" class="uk-border-circle" :src="message.image" alt="">
                                        </div>
                                        <div class="uk-width-expand uk-margin-remove-left">
                                            <p style="font-weight: bold" class=" uk-margin-remove"><a class="uk-link-reset" href="#">{{message.alias[0]}}</a></p>
                                            <ul class="uk-comment-meta uk-subnav  uk-margin-remove-top">
                                                <li><a class="uk-text-meta" style="color: black" href="#"><time datetime="2016-04-01T19:00">{{message.timestamp|formatDate}}</time></a></li>
                                                <li><a href="#"></a></li>
                                            </ul>
                                        </div>
                                    </header>
                                    <div class="uk-comment-body uk-margin-remove-top">
                                        <p>{{message.msg}}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                     </div>
                 </div>




                 <form @submit.prevent="PrivateMsg" class="form">
                     <div class="form-group uk-margin-remove-left" >
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
                search:''


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
                             image:this.MyImage,
                     alias:this.Aliasname
                 }
                db.collection('PrivateMessages').add(info).then(()=>{
                    this.success = 'message sent'
                    this.msg = ''
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
                    db.collection("PrivateMessages").where("ConID", "==", id).orderBy('timestamp')
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
           Aliasname(){
               return this.crabs.map((map)=>{
                  return map.alias
               })
           },
            filteredfrens() {
                return this.frens.filter(post => {
                    return post.myAlias.toLowerCase().includes(this.search.toLowerCase());
                });
            },
            filteredFren() {
                return this.Friends.filter(post => {
                    return post.userRequestedAlias.toLowerCase().includes(this.search.toLowerCase());
                });
            },
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
   span{
       margin-left: 5px;
       font-weight: bold;
   }
.mint{width: 50%;
border-radius: 10px}
.Image{
    background-image: url("data:image/jpeg;base64,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");
    background-repeat: no-repeat;
    background-size: cover;
    height: 750px;
    overflow: auto;
    scroll-behavior: smooth;
}

.form input{
    bottom:0;
   right:307px;
    position: fixed;
    width: 50%;
    margin-bottom: 10px;
    background: #ddd;

}
    button{
        bottom:0;
right:230px;
        position: fixed;

        margin-bottom: 10px;
    }
   .scroll::-webkit-scrollbar {
       display: none;
   }
</style>

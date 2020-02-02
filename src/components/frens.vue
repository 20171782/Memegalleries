<template>
    <div class="uk-align-center"  >
        <div class="uk-card-header" v-if="frens.length !=0 || Friends.length !=0">

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
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <img class="uk-border-circle" width="40" height="40" :src="requests.requesterImage">
                        </div>
                        <div class="uk-width-expand">
                            <router-link :to="'/profile/' + requests.myAlias " ><span class=" " style="color: black">{{requests.myAlias }}</span></router-link>
                        </div>
                        <div>
                            <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00"><span uk-tooltip="title: remove fren; pos: right" class="uk-margin-small-right" @click="remove(requests.request_id)" style="color:#009b3a " uk-icon="minus-circle"></span></time></p>
                        </div>
                    </div>
                </div>

            </div>

            <!--  For who send fren request -->
            <div class="uk-card uk-card-default me" v-for="requests in Friends"  style=" background: #e9ebee;" >
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid :id="requests.user_requested">
                        <div class="uk-width-auto">
                            <img class="uk-border-circle" width="40" height="40" :src="requests.user_requestedImage">
                        </div>
                        <div class="uk-width-expand">
                            <router-link :to="'/profile/' + requests.userRequestedAlias " ><span class=" " style="color: black">{{ requests.user_requestedName}}</span></router-link>

                        </div>
                    <div>
                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00"><span uk-tooltip="title: remove fren; pos: right" class="uk-margin-small-right" @click="remove(requests.request_id)" style="color:#009b3a " uk-icon="minus-circle"></span></time></p>
                    </div>
                    </div>
                </div>


<!--            Popover for frens    -->
                <b-popover :target="requests.user_requested" triggers="hover" placement="left">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                        <div class="uk-width-auto">
                            <img class="" width="80" height="80" :src="requests.user_requestedImage">
                        </div>
                        <div class="uk-width-expand">
                            <router-link :to="'/profile/' + requests.userRequestedAlias " ><span class=" " style="color: black">{{ requests.user_requestedName}}</span></router-link>
                            <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00"><span uk-tooltip="title: remove fren; pos: right" class="uk-margin-small-right" @click="remove(requests.request_id)" style="color:#009b3a " uk-icon="minus-circle"></span></time></p>
                        </div>

                    </div>
                </b-popover>
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
        name: "frens",
        data(){
          return{
              frens:[],
              Friends:[],
              id: firebase.auth().currentUser.uid,
              images:'signup.svg'


          }
        },
        methods:{
            remove(id){
                db.collection("friendships").doc(id).delete().then(()=>{

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
        },

    }
</script>

<style scoped>

img {
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    /*border: 5px solid #fed100 ;*/

}

input{
    background-color: #e9ebee;
}

</style>

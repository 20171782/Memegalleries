<template>
    <div>
        <form class="uk-search uk-search-default">
            <span uk-search-icon></span>
            <input  id="users" class="uk-search-input " type="search" placeholder="Search..." style="width:250px;background-color: #e9ebee ;border-radius: 6px" v-model="search" >
        </form>

        <!--Pop Over shown here -->
        <div >
            <b-popover   placement="bottom"  target="users" title="People you may know">

               <div class="scroll"  style="height: 325px;overflow: auto">
                   <!--Show the first four users  -->
                   <div class="uk-card uk-card-default">
                       <div class="uk-card-header"  v-show="Show" v-for="use in sliceList">
                           <div class="uk-grid-small uk-flex-middle " uk-grid v-if="!test(use.id) && !confirm(use.id)">
                               <div class="uk-width-auto" v-if="!test(use.id) && !confirm(use.id)">
                                   <img class="uk-border-circle" width="40" height="40" :src="use.image">
                               </div>
                               <div v-if="!test(use.id) && !confirm(use.id)" class="uk-width-expand">
                                   <p class=" uk-margin-remove-bottom">{{ use.name }}</p>
                                   <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                               </div>
                               <p uk-tooltip="title: Add Fren; pos: top-right"> <span  v-if="!test(use.id) && !confirm(use.id)" @click="addfren(use.id, use.image, use.name, use.alias)" uk-icon="plus-circle" ></span></p>
                           </div>

                           <p v-else>Request sent <span style="color: green">{{use.name}}</span></p>
                       </div>
                   </div>

                    <div  class="uk-card uk-card-default uk-text-center" style="color: orange;padding-top: 20px">
                        <!--  Toggle the amount of pwesons to be shown-->
                        <a  @click="change"
                        >Show <span v-show="Show">all </span
                        ><span v-show="Show" uk-icon="triangle-down"></span>
                            <span v-show="!Show">less</span
                            ><span v-show="!Show" uk-icon="triangle-up"></span
                            ></a>
                    </div>

                   <!--Show all users  -->
                  <div  class="uk-card uk-card-default">
                      <div class="uk-card-default uk-card-header"  v-show="!Show" v-for="use in filteredList">
                          <div class="uk-grid-small uk-flex-middle" v-if="!test(use.id) && !confirm(use.id)" uk-grid>
                              <div class="uk-width-auto" v-if="!test(use.id) && !confirm(use.id)">
                                  <img class="uk-border-circle" width="40" height="40" :src="use.image">
                              </div>
                              <div v-if="!test(use.id) && !confirm(use.id)" class="uk-width-expand">
                                  <p class=" uk-margin-remove-bottom">{{ use.name }}</p>
                                  <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                              </div>
                              <p uk-tooltip="title: Add Fren; pos: top-right"> <span  v-if="!test(use.id) && !confirm(use.id)" @click="addfren(use.id, use.image, use.name, use.alias)" uk-icon="plus-circle" ></span></p>
                          </div>
                          <p v-else>request  to <span style="color: green">{{use.name}}</span></p>
                      </div>

                  </div>
               </div>

            </b-popover>
        </div>


    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    import {fb} from "@/firebase/init";

    export default {
        name: "sidebar",

        data() {
            return {
                users: [],
                gallery: [],
                id: firebase.auth().currentUser.uid,
                msg: "",
                name: null,
                image: null,
                myAlias: null,
                testing: [],
                requester: null,
                search: "",
                Show: true,
                images:'users.svg'
            };
        },

        methods: {
            addfren(id, image, name, alias) {
                db.collection("friendships")
                    .add({
                        requester: this.id,
                        user_requested: id,
                        user_requestedImage: image,
                        status: null,
                        name: this.name,
                        user_requestedName: name,
                        requesterImage: this.image,
                        userRequestedAlias: alias,
                        myAlias: this.myAlias
                    })
                    .then(ref => {
                        db.collection("friendships")
                            .doc(ref.id)
                            .update({
                                request_id: ref.id
                            });
                    });
            },
            test(id) {
                return this.testing.find(map => {
                    return map.user_requested == id && map.requester == this.id;
                });

            },
            confirm(id) {
                return this.testing.find(map => {

                    return map.user_requested == this.id && map.requester == id;
                });
            },
            change() {
                if (!this.Show) {
                    this.Show = true;
                } else {
                    this.Show = false;
                }
            }
        },
        firestore() {
            return {
                testing: fb.collection('friendships')
            }
        },
        computed: {
            filteredList() {
                return this.users.filter(post => {
                    return post.name.toLowerCase().includes(this.search.toLowerCase());
                });
            },
            sliceList() {
                return this.filteredList.slice(0, 4);
            }
        },

        created() {
            db.collection("Profile")
                .where("id", "==", this.id)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.name = doc.data().name;
                        this.image = doc.data().image;
                        this.myAlias = doc.data().alias;
                    });
                })
                .catch(error => {
                    console.log("Error getting documents: ", error);
                });
            this.$store.dispatch("Users", this.users);


        }
    };
</script>

<style scoped>

    img {
        width: 30px;
        height: 30px;
    }
    .scroll::-webkit-scrollbar {
      display: none;
    }
</style>

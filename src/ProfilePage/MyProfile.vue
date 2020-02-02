<template>
    <div >
        <div class="uk-container  uk-margin-top">
            <div  v-for="test in crabs"  >

                <div class="uk-child-width-1-2@m" uk-grid>
                    <div>
                        <img  :src="test.image" alt="Avatar" >
                    </div>
                    <div class="uk-margin-top">
                        <p class="uk-text-bold" >{{test.name}}</p>
                        <p class="uk-text-bold" >frens</p>
                        <p class="uk-text-bold" >Memes</p>
                    </div>
                </div>





                <div>

                </div>
                <div>

                </div>






                    <h4 class="uk-heading-bullet uk-margin-top">Contact Information</h4>
                    <p><i class="fa fa-fa fa-envelope-open"></i> {{test.email}}</p>
                    <p><i class="fa fa-phone-square"></i> {{test.phone}}</p>


                    <h4 class="uk-heading-bullet uk-margin-top" >General Information</h4>
                    <p><i class="fa fa-users"></i> {{test.stat}}</p>
                    <p><i class="fa fa-briefcase"></i> {{test.job}}</p>
                    <p v-if="test.gender[0]=='male'"><i class="fa fa-male"></i> {{test.gender[0]}}</p>
                    <p v-if="test.gender[0]=='female'"><i class="fa fa-female"></i> {{test.gender[0]}}</p>

                    <p><i class="fa fa-user"></i>  {{test.name}}</p>
                    <p><i class="fa fa-hourglass-2"></i>  {{test.age}} years old</p>
                    <p><i class="fa fa-map"></i>{{test.address}}</p>

                </div>
                </div>


            </div>

</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "MyProfile",
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
    img {
        width: 150px;
        height: 150px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid lightgray ;

    }
i{color: grey}

</style>

<template>
    <div class="" >
<div v-for="image in images" >
    <div>
        <div class="card">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto">
                        <img class="uk-border-circle" width="40" height="20" :src="image.Photo">
                    </div>
                    <div class="uk-width-expand">
                        <p class="uk-text-bold uk-margin-remove-bottom">{{image.name}}</p>
                        <p class="uk-text-meta uk-margin-remove-top"><time >Published: {{image.timestamp|formatDate}}</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-media-top">
                <router-link :to="'/start/' + image.Meme_id"><img :src="image.image" alt=""></router-link>
            </div>

            <div v-if="comment.Meme_id == image.Meme_id" v-for="comment in comments">
              {{comment.message}}
            </div>
<!--            <div class="uk-card-body">-->
<!--                <h3 class=""><b>Title:</b> {{image.title}}</h3>-->
<!--                <p><b>Description:</b> {{image.description}}</p>-->
<!--                <p><b>Category:</b> {{image.category}}</p>-->
<!--                <p><b>Published:</b> {{image.timestamp|formatDate}}</p>-->
<!--                <p><b>Comments:</b> {{image.counter}}</p>-->
<!--                <p><b>likes:</b> {{image.likes}}</p>-->
<!--                <p><b>dislikes:</b> {{image.dislikes}}</p>-->
<!--            </div>-->
        </div>
    </div>

</div>

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import db from "@/firebase/init";
    import firebase from 'firebase'

    export default {
        name: "userMemes",
        props: ["ids"],
        data() {
            return {
                images:[],
                comments:[],
                likes:[],
                id:this.$route.params.id
            };
        },
        methods: {
            Goto(id) {
                this.$router.push({ name: "GetStarted", params: { id: id } });
                window.location.reload();
            }
        },
        computed: {
            ...mapGetters(["loading"]),

        },
        created() {
            // this.$store.dispatch("ViewImages");
            db.collection('Memes')
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.images.push(change.doc.data());
                        }

                    });
                });
            db.collection('message')
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.comments.push(change.doc.data());
                        }

                    });
                }); db.collection('likes')
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.likes.push(change.doc.data());
                        }

                    });
                });
        }
    };
</script>

<style scoped>

   .uk-width-auto img {
        width: 50px;
        height: 50px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid #e9ebee ;

    }
</style>

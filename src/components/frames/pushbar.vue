<template>
    <div>

    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "pushbar",
        data(){
            return {

            }
        },
        methods:{
            get(){

            }
        },
        created(){

            db.collection("Memes")
                .onSnapshot(function(snapshot) {
                    snapshot.docChanges().forEach(function(change) {
                        if (change.type === "added") {
                            console.log("New city: ", change.doc.id);
                        }
                    });
                });
            db.collection("likes")
                .onSnapshot(function(snapshot) {
                    snapshot.docChanges().forEach(function(change) {
                        if (change.type === "added") {
                            console.log("New city: ", change.doc.id);
                        }
                    });
                });










        }
    }
</script>

<style scoped>
    .main {
        margin-left: 160px; /* Same as the width of the sidenav */
        font-size: 28px; /* Increased text to enable scrolling */
        padding: 0px 10px;
    }
</style>

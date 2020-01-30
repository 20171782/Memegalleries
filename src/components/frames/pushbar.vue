<template>
    <div>

        <div class="container">
            <div class="fb-profile">
                <img align="left" class="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/" alt="Profile image example"/>
                <img align="left" class="fb-image-profile thumbnail" src="http://lorempixel.com/180/180/people/9/" alt="Profile image example"/>
                <div class="fb-profile-text">
                    <h1>Eli Macy</h1>
                    <p>Girls just wanna go fun.</p>
                </div>
            </div>
        </div> <!-- /container -->


    </div>







  <!-- /container -->
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "pushbar",
        data(){
            return {
                likes:[]
            }
        },
        methods:{

        },
        computed:{
         GetLike(){
             return this.$store.state.likes
         }
        },
        created() {
            this.$store.dispatch('fetchLikes',this.likes)
        }


    }
</script>

<style scoped>
    .thumbnail {
        padding:0px;
    }
    .panel {
        position:relative;
    }
    .panel>.panel-heading:after,.panel>.panel-heading:before{
        position:absolute;
        top:11px;left:-16px;
        right:100%;
        width:0;
        height:0;
        display:block;
        content:" ";
        border-color:transparent;
        border-style:solid solid outset;
        pointer-events:none;
    }
    .panel>.panel-heading:after{
        border-width:7px;
        border-right-color:#f7f7f7;
        margin-top:1px;
        margin-left:2px;
    }
    .panel>.panel-heading:before{
        border-right-color:#ddd;
        border-width:8px;
    }
</style>

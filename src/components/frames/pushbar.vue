<template>
    <div>
<div >

</div>
     </div>


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
    .main {
        margin-left: 160px; /* Same as the width of the sidenav */
        font-size: 28px; /* Increased text to enable scrolling */
        padding: 0px 10px;
    }
</style>

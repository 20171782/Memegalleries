<template>
<div>
    <div class="text-center my-3">

        <b-button v-b-popover.hover.top="'I am popover directive content!'" title="Popover Title">
            Hover Me
        </b-button>
    </div>
</div>
</template>

<script>
   import axios from 'axios'
    export default {
        name: "admin",
        data(){
            return {
                me:''
            }
        },

        created(){


            axios.get(' https://us-central1-myproject-bb84e.cloudfunctions.net/Admins')
                .then((response) =>{
                    // handle success
                    this.me = response;
                })
                .catch((error) =>{
                    // handle error
                    console.log(error);
                })
        }
    }

</script>

<style scoped>

</style>

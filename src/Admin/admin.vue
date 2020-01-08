<template>
<div>

    <ul id="component-tab-left" class="uk-switcher">
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
    </ul>
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


            axios.post('http://localhost:5000/myproject-bb84e/us-central1/Admins')
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

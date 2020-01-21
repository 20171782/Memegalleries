<template>
    <div>

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
data:[],


                comments:[
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'first'},
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'Dont try this'},
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'first'},
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'first'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',comment:'second'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',comment:'second'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',comment:'third'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',comment:'third'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',comment:'third'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                ],



                pic:[
                    {id:'5jnlkFlLCEPpbfHmixe',feedback:'disliked'},

                    {id:'BIBvgwGGu6NWwQcg2ywp',feedback:'disliked'},
                    {id:'5jnlkFlLCEPpbfHmixe',feedback:'this is bad for business'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',feedback:'liked'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',feedback:'liked'},

                ],
                results:[]
            }
        },
        methods:{

        },


        created(){
          var self = this;

            for(let i in self.pic){

                if(self.comments[i].id === self.pic[i].id)
                var idse = self.comments[i].id;
                var commented = self.comments[i].comment;
                var feedbacks = self.pic[i].feedback
                console.log(commented)
                {
                    self.results.push({
                        id:idse,
                        comment:commented,
                        feeds:feedbacks
                    })
              }


            }


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

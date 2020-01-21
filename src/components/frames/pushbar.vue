<template>
    <div>
<div v-for="result in results">
    {{result.comment}} : {{result.feeds}}
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

//primary
                comments:[
                    {id:'5jnlkFlLCEPpbfHmixe',fkey:"5jnlkFlLCEPpbfHmixe",comment:'first'},
                    {id:'5jnlkFlLCEPpbfHmixe',fkey:"5jnlkFlLCEPpbfHmixe",comment:'Dont try this'},
                    {id:'5jnlkFlLCEPpbfHmixe',fkey:"5jnlkFlLCEPpbfHmixe",comment:'first'},
                    {id:'5jnlkFlLCEPpbfHmixe',fkey:"BIBvgwGGu6NWwQcg2ywp",comment:'first'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',fkey:"5jnlkFlLCEPpbfHmixe",comment:'second'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',fkey:"5jnlkFlLCEPpbfHmixe",comment:'second'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',fkey:"5jnlkFlLCEPpbfHmixe",comment:'third'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',fkey:"BIBvgwGGu6NWwQcg2ywp",comment:'third'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',fkey:"BIBvgwGGu6NWwQcg2ywp",comment:'third'},
                    {id:'53NUXgzdTKhiZCrubOmf',fkey:"5jnlkFlLCEPpbfHmixe",comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',fkey:"5jnlkFlLCEPpbfHmixe",comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',fkey:"BIBvgwGGu6NWwQcg2ywp",comment:'fourth'},
                ],


//secondary
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
mounted(){
          this.$nextTick(function() {
            var self = this
        console.log('this is called at mounted')
            for(let i in self.comments){
              console.log('self.comments')
              if(self.comments[i].fkey === self.pic[i].id)
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
  })
},




    }
</script>

<style scoped>
    .main {
        margin-left: 160px; /* Same as the width of the sidenav */
        font-size: 28px; /* Increased text to enable scrolling */
        padding: 0px 10px;
    }
</style>

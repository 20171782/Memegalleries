<template>
    <div>
 <div v-for="(ent,index) in me" :key="index" @click="test(ent.id,index.length)">
     {{ent.name}}
     <div v-if="ent.id == gn.id" v-for="(gn,sav,com) in like" :key="sav">
{{gn.id}}
     </div>

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
              me:[
                  {name:'Dalton',id:'12345'},
                  {name:'Daequan',id:'4564'},
                  {name:'Savisha',id:'87678'},
                  {name:'Family',id:'786887978979878'},


              ],
                like:[

                    {id:'12345'},

                    {id:'12345'},
                    {id:'4564'},
                    {id:'4564'},
                    {id:'4564'},
                    {id:'4564'},
                    {id:'4564'},
                    {id:'4564'},

                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},
                    {id:'786887978979878'},


                ],
                comments:[
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'first'},
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'first'},
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'first'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',comment:'second'},
                    {id:'BIBvgwGGu6NWwQcg2ywp',comment:'second'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',comment:'third'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',comment:'third'},
                    {id: 'Gq0xZTGGnT9qDXorNvEN',comment:'third'},
                    {id:'53NUXgzdTKhiZCrubOmf\n',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf\n',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf\n',comment:'fourth'},
                ]
            }
        },
        methods:{
            test(id,inex){
                console.log(id)
                return this.like.filter((map)=>{
                    return map.id == id
                })
            }
        },


        created(){
          var self = this;

            for(let i in self.comments){
              console.log( self.comments[i].id)
              db.collection("Memes")
                .onSnapshot(querySnapshot => {
                  querySnapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                      self.data.push(change.doc.data());
                      self.comments.push(self.data)
                      // if(self.data[i].Meme_id == self.comments[i].id ){
                      //   self.comments.push(self.data)
                      // }
                    }
                  });
                });
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

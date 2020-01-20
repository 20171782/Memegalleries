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
                count:[],
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
                    {id:'786887978979878',comment:'first'},
                    {id:'4564',comment:'second'},
                    {id:'4564',comment:'third'},
                    {id:'786887978979878',comment:'fourth'},
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

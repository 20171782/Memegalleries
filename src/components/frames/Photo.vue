<template>

    <div>

        <div v-for="item in comments">
            {{item}}<br><br>
            Count: {{getLikeCount(item)}}

        </div>
    </div>
</template>

<script>

    import db from "@/firebase/init";
    export default {
        name: "Photo",
        data(){
            return{
              comments:[],
                likes:[],
                results:[],


            }
        },
        beforeCreate(){
            var self = this;
            db.collection("Memes")
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === "added") {
                            this.comments.push(change.doc.data());

                        }
                    });
                });

                db.collection("likes")
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.likes.push(change.doc.data());


                            }
                        });
                    });


        },
      methods:{
          getLikeCount(item)
        {
          var count = 0;
          for(var item1 in this.likes)
          {
            if (item.Meme_id === this.likes[item1].Meme_id)
            {
              count = count + 1;
            }else{
            }
          }
          return count;
        }
      },
        mounted() {
          var self = this;
          var tmp = {};
          var tmp1 = [];
            // console.log(self.comments)
            this.$nextTick(function(){


              console.log('Tick function')
              for (let i = 0; i < tmp.length; i++) {
                console.log('kkk');
              }
              for(var i in self.comments) {
                console.log(i)
              }
            })

            // for(let i in self.likes){
            //     console.log(self.likes[i].Meme_id)
            //     var likeArray = []
            //     if(self.comments[i].Meme_id === self.likes[i].Meme_id){
            //        var alias = self.comments[i].alias;
            //     var name = self.comments[i].name;
            //     likeArray.push(self.likes[i])
            //         self.results.push({
            //             alias:alias,
            //             name:name,
            //             likeArray:likeArray
            //         })
            //     }
            //
            //
            // }
        }
    }
</script>

<style scoped>

</style>

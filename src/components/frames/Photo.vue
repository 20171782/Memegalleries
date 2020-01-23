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

    }
</script>

<style scoped>

</style>

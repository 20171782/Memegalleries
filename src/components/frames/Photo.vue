<template>

    <div>
        <img src="" alt="">
    </div>
</template>

<script>

    import db from "@/firebase/init";
    export default {
        name: "Photo",
        data(){
            return{comments:[],
                likes:[],
                results:[],
                commentate:[
                    {id:'5jnlkFlLCEPpbfHmixe',comment:'first'},
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
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                    {id:'53NUXgzdTKhiZCrubOmf',comment:'fourth'},
                ],

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
            for(let i in self.likes){
                db.collection("likes")
                    .onSnapshot(querySnapshot => {
                        querySnapshot.docChanges().forEach(change => {
                            if (change.type === "added") {
                                this.likes.push(change.doc.data());

                                var likeArray = []
                                    if(self.likes[i].Meme_id === self.comments[i].Meme_id  ){
                                        var alias = self.comments[i].alias;
                                        var name = self.comments[i].name;
                                        console.log(self.likes[i].Meme_id)
                                        likeArray.push(self.likes[i])
                                        // self.results.push({
                                        //     alias:alias,
                                        //     name:name,
                                        //     likeArray:likeArray
                                        // })
                                    }



                            }
                        });
                    });
            }

        },
        mounted() {
            var self = this;
            // console.log(self.comments)

            for(let i in self.comments) {
                console.log(self.comments)
            }
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

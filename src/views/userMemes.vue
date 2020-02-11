<template>
    <div class="margin" >
<div v-for="image in images" :key="image.Meme_id" >
    <div >
        <div class="card uk-margin-top">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-auto " tabindex="0">
                        <img class=" uk-border-circle" width="40" height="20" :src="image.Photo">
                    </div>
                    <div class="uk-width-expand">
                        <p class="uk-text-bold uk-margin-remove-bottom">{{image.name}}</p>
                        <p class="uk-text-meta uk-margin-remove-top"><time >Published: {{image.timestamp|formatDate}}</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-media-top uk-inline-clip uk-transition-toggle">
                <router-link :to="'/start/' + image.Meme_id"><img class="uk-transition-scale-up uk-transition-opaque image-fluid" :src="image.image" alt=""></router-link>
            </div>

          <div style="font-size: 1.3rem;" class="uk-card-body" >
             <div uk-grid>
                 <div><span><i class="fa fa-thumbs-up"></i>{{getLikeCount(image)}}</span></div>
                 <div><span><i class="fa fa-thumbs-down"></i>{{getdisLikeCount(image)}}</span></div>
                 <div><span><i class="fa fa-comments"></i>{{getCommentsCount(image)}}</span></div>
             </div>


              <ul uk-accordion class="uk-margin-top">
                  <li>
                      <a  v-if="getCommentsCount(image) != 0" class="uk-accordion-title uk-text-primary" uk-icon="chevron-down" href="#" >Read Comments</a>
                      <a  v-else class="uk-accordion-title uk-text-primary"  href="#" >No Comments</a>
                      <div class="uk-accordion-content">
                          <div class="uk-margin-top" v-for="comment in getComments(image)">
                              <div class="row">
                                  <div class="col-sm-1">
                                      <div  v-if="comment.pic" class=" ">
                                          <img class="uk-width-auto  img-responsive uk-border-circle" :src="comment.pic">
                                      </div>
                                      <div v-else class="">
                                          <img  class=" uk-width-auto img-responsive uk-border-circle" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
                                      </div>
                                  </div>

                                  <div class="col-sm-9">
                                      <div class="panel panel-default">
                                          <div class="panel-heading">
                                              <strong>{{comment.name}}</strong> | <span class="text-muted">{{comment.time|formatDate}}</span>
                                          </div>
                                          <div class="panel-body">
                                              {{comment.message}}
                                          </div><!-- /panel-body -->
                                      </div><!-- /panel panel-default -->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>







          </div>

        </div>
    </div>

</div>

    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import db from "@/firebase/init";
    import firebase from 'firebase'

    export default {
        name: "userMemes",
        props: ["ids"],
        data() {
            return {
                images:[],
                comments:[],
                likes:[],
              dislikes:[],
                id:this.$route.params.id
            };
        },
        methods: {
            Goto(id) {
                this.$router.push({ name: "GetStarted", params: { id: id } });
                window.location.reload();
            },

          getLikeCount(item) {
            var count = 0;
            for (var item1 in this.likes) {
              if (item.Meme_id === this.likes[item1].Meme_id) {
                count = count + 1;
              } else {
              }
            }
            return count;
          },
          getdisLikeCount(item) {
            var count = 0;
            for (var item1 in this.dislikes) {
              if (item.Meme_id === this.dislikes[item1].Meme_id) {
                count = count + 1;
              } else {
              }
            }
            return count;
          },
            getCommentsCount(item) {
                var count = 0;
                for (var item1 in this.comments) {
                    if (item.Meme_id === this.comments[item1].Meme_id) {
                        count = count + 1;
                    } else {
                    }
                }
                return count;
            },
          getComments(item) {
            var comments = [];
            for (var item1 in this.comments) {
              if (item.Meme_id === this.comments[item1].Meme_id) {
                comments.push(this.comments[item1]);
              } else {
              }
            }
            return comments;
          },
          getCommentsCount(item) {
            var count = 0;
            for (var item1 in this.comments) {
              if (item.Meme_id === this.comments[item1].Meme_id) {
                count = count + 1;
              } else {
              }
            }
            return count;
          },
            show(){
                if(this.app == true){
                    return this.app = true
                }
            }
        },
        computed: {
            ...mapGetters(["loading"]),

        },
        created() {
          this.$store.dispatch('fetchLikes',this.likes);
          this.$store.dispatch('disLikes',this.dislikes);
          this.$store.dispatch('fetchComment',this.comments);
            db.collection('Memes')
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.images.push(change.doc.data());
                        }

                    });
                });

        }
    };
</script>

<style scoped>

   .uk-width-auto img {
        width: 50px;
        height: 50px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        border: 5px solid #e9ebee ;

    }
    .padding{
        padding:5px 5px 5px 10px
    }
   .margin{
       margin-left: 90px;
   }
    .col-sm-1 img{

       width: 50px;
       height: 50px;
       -webkit-border-radius: 50%;
       -moz-border-radius: 50%;
       border-radius: 50%;



    }
</style>

<template>
<!--  <div class="uk-margin-top uk-margin-bottom" >-->

<!--&lt;!&ndash;Carousel&ndash;&gt;-->
<!--  <div  style="">-->
<!--    <div v-if="loading"><loader></loader></div>-->



<!--    <hr class="">-->
<!--    <div-->
<!--      class="uk-position-relative uk-visible-toggle uk-light"-->
<!--      tabindex="-1"-->
<!--      uk-slideshow="autoplay: true; autoplay-interval: 4000;ratio:7:3"-->
<!--    >-->
<!--      <ul class="uk-slideshow-items">-->
<!--        <li v-for="image in images" :key="image.timestamp">-->

<!--          <router-link :to="'/start/' + image.Meme_id"-->
<!--            ><img :src="image.image" style="border-radius: 10px"-->
<!--          /></router-link>-->

<!--          <div-->
<!--            style=""-->
<!--            class="uk-overlay uk-overlay-primary uk-position-right uk-transition-slide-right "-->
<!--          >-->

<!--            <ul class="fa-ul">-->
<!--              <li><span class="fa-li"><i class="fas fa-header"></i></span>{{image.title}}</li>-->
<!--              <li><span class="fa-li"><i class="fas fa-user"></i></span>{{image.name}}</li>-->
<!--              <li><span class="fa-li"><i class="fas fa-clock-o "></i></span>{{ image.timestamp|formatDate }}</li>-->
<!--              <li><span class="fa-li"><i class="fas fa-square"></i></span> {{ image.description|smallOne }} ...</li>-->
<!--              <li><span class="fa-li"><i class="fa fa-thumbs-up"></i></span> {{getLikeCount(image)}}</li>-->
<!--              <li><span class="fa-li"><i class="fa fa-thumbs-down"></i></span> {{getdisLikeCount(image)}}</li>-->

<!--            </ul>-->

<!--            <p class=" btn btn-secondary"-->
<!--              @click="messages(image.Meme_id)"-->
<!--            style="background: #009b3a">-->
<!--              View Comments<span uk-icon="icon: triangle-right"></span>-->
<!--            </p>-->
<!--          </div>-->
<!--        </li>-->

<!--      </ul>-->

<!--      <a-->
<!--        class="uk-position-center-left uk-position-small uk-hidden-hover"-->
<!--        href="#"-->
<!--        uk-slidenav-previous-->
<!--        uk-slideshow-item="previous"-->
<!--      ></a>-->
<!--      <a-->
<!--        class="uk-position-center-right uk-position-small uk-hidden-hover"-->
<!--        href="#"-->
<!--        uk-slidenav-next-->
<!--        uk-slideshow-item="next"-->
<!--      ></a>-->
<!--    </div>-->

<!--&lt;!&ndash;    Dropdown &ndash;&gt;-->
<!--    <div style="max-height: 500px;overflow: auto;width: 300px"-->
<!--      uk-dropdown="mode:click;pos: right-center;duration:2000" class="uk-section uk-section-muted"-->
<!--    >-->
<!--      <div v-if="comments.length != 0">-->
<!--        <h3 v-if="comments.length > 1">{{ comments.length }} Comments</h3>-->
<!--        <h3 v-if="comments.length == 1">{{ comments.length }} Comment</h3>-->

<!--        <span class="fa fa-thumbs-down" style="margin-left: 18px"> {{dislikes.length}}</span>-->
<!--        <hr />-->

<!--        <article-->
<!--          class="uk-comment"-->
<!--          v-for="message in comments"-->
<!--          :key="message.timestamp"-->
<!--        >-->
<!--          <header-->
<!--            class="uk-comment-header uk-grid-medium uk-flex-middle"-->
<!--            uk-grid-->
<!--          >-->
<!--            <div class="uk-width-auto ">-->
<!--              <img class="uk-border-circle" :src="message.pic" alt="" />-->
<!--            </div>-->
<!--            <div class="uk-width-expand">-->
<!--              <h4 class="uk-comment-title uk-margin-remove">-->
<!--                <a class="uk-link-reset" href="#">{{ message.name }}</a>-->
<!--              </h4>-->
<!--            </div>-->
<!--          </header>-->
<!--          <div class="uk-comment-body uk-margin-remove">-->
<!--            <p>-->
<!--              <i style="" class="fas fa-comment-dots"></i>{{ message.message }}-->
<!--            </p>-->
<!--            <p style="margin-left: 4px" v-for="emoji in message.emoji">-->
<!--              {{ emoji }}-->
<!--            </p>-->

<!--          </div>-->
<!--          <div class="first me">-->
<!--            <img :src="message.image" alt="" height="100px" width="100px" />-->
<!--          </div>-->
<!--          <hr>-->
<!--        </article>-->
<!--      </div>-->
<!--      <div v-else>-->
<!--        <h3>No Comments</h3>-->
<!--        <span style="font-size:100px;">&#128577;</span>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div></div>-->

  <div>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:3; animation: push">

      <ul class="uk-slideshow-items">
        <li v-for="image in images">
          <router-link :to="'/start/' + image.Meme_id"
          ><img :src="image.image" style="border-radius: 10px"
          /></router-link>

          <div
                  style=""
                  class="uk-overlay uk-overlay-primary uk-position-right uk-transition-slide-right "
          >

            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-header"></i></span>{{image.title}}</li>
              <li><span class="fa-li"><i class="fas fa-user"></i></span>{{image.name}}</li>
              <li><span class="fa-li"><i class="fas fa-clock-o "></i></span>{{ image.timestamp|formatDate }}</li>
              <li><span class="fa-li"><i class="fas fa-square"></i></span> {{ image.description|smallOne }} ...</li>
              <li><span class="fa-li"><i class="fa fa-thumbs-up"></i></span> {{getLikeCount(image)}}</li>
              <li><span class="fa-li"><i class="fa fa-thumbs-down"></i></span> {{getdisLikeCount(image)}}</li>
              <li><span class="fa-li"><i class="fa fa-comments"></i></span>{{getcommentCount(image)}}</li>
              <li><span class="fa-li"></span ><span uk-icon="chevron-down"></span><a  :href="'#' + image.Meme_id " uk-toggle>view comments</a></li>


            </ul>

            <div :id="image.Meme_id" class="uk-modal-container" uk-modal>
              <div class="uk-modal-dialog uk-modal-body" uk-overflow-auto>
                <button class="uk-modal-close-default" type="button" uk-close></button>

                <h4 class="uk-heading-line uk-heading-bullet"><span>{{getcommentCount(image)}} Comments</span></h4>
                <div uk-grid>
                  <div>
                    <p><i class="fa fa-thumbs-up"></i> {{getLikeCount(image)}}</p>
                  </div>
                  <div>
                    <p><i class="fa fa-thumbs-down"></i>{{getdisLikeCount(image)}}</p>
                  </div>
                </div>



                <div class="uk-margin-top" v-for="comment in getComments(image)">
                  <div class="row">
                    <div class="col-sm-1">
                      <div  v-if="comment.pic" class=" ">
                        <img style="border-radius: 50%;width: 50px;height: 50px;border: 3px solid #fed100" class="img-responsive uk-border-circle" :src="comment.pic">
                      </div>
                      <div v-else class="">
                        <img style="border-radius: 50%;width: 50px;height: 50px;border: 3px solid #fed100" class="img-responsive uk-border-circle" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png">
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
            </div>



          </div>
        </li>

      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>





  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import db from "@/firebase/init";

export default {
  name: "corousel",
  data() {
    return {
      images: [],
      cat: "",
      user: firebase.auth().currentUser.uid,
      chosen: this.$route.params.id,
      comments: [],
      likes:[],
      dislikes: [],
      id: firebase.auth().currentUser.uid,
    };
  },
  computed: {
    ...mapGetters(["loading"]),
    categories() {
      return this.$store.getters. loadedCategory;
    },
   Category(){
  return this.images.map((map)=>{
   return  map.category
  })
   }

  },

  methods: {

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
    getcommentCount(item) {
      var count = 0;
      for (var item1 in this.dislikes) {
        if (item.Meme_id === this.comments[item1].Meme_id) {
          count = count + 1;
        } else {
        }
      }
      return count;
    },
    getComments(item) {
      var comments = [];
      for (var item1 in this.dislikes) {
        if (item.Meme_id === this.comments[item1].Meme_id) {
          comments.push(this.comments[item1]);
        } else {
        }
      }
      return comments;
    },
getCommentsCount(item) {
  var count = 0;
      for (var item1 in this.dislikes) {
        if (item.Meme_id === this.comments[item1].Meme_id) {
          count = count + 1;
        } else {
        }
      }
      return count;
    },





    messages(id) {
      this.comments = [];
      this.likes = [],
              this.dislikes = []



    }

  },
  created() {
    this.$store.dispatch("carousel", this.images);
    this.$store.dispatch('fetchLikes',this.likes);
    this.$store.dispatch('disLikes',this.dislikes);
    this.$store.dispatch('fetchComment',this.comments);

  }
};
</script>

<style scoped>

.uk-slideshow-items img {
  width: 900px;
  height: 900px;
  max-height: 100% !important;
  /*height:400px !important;*/
  border: 4px solid white;
}

.thumbnail {
  padding:0px;
}
.panel {
  position:relative;
}
.panel>.panel-heading:after,.panel>.panel-heading:before{
  position:absolute;
  top:11px;left:-16px;
  right:100%;
  width:0;
  height:0;
  display:block;
  content:" ";
  border-color:transparent;
  border-style:solid solid outset;
  pointer-events:none;
}
.panel>.panel-heading:after{
  border-width:7px;
  border-right-color:#f7f7f7;
  margin-top:1px;
  margin-left:2px;
}
.panel>.panel-heading:before{
  border-right-color:#ddd;
  border-width:8px;
}


</style>

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
              <li></li>

            </ul>

            <b-button class="uk-margin"  v-b-popover.hover.right="'I am popover directive content!'" title="Popover Title">
              Hover Me
            </b-button>


          </div>
        </li>

      </ul>

      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <div v-for="image in images">
      <div v-for="comment in getComments(image)">
        {{comment.message}}
        <img width="50"  height="50" class="uk-border-circle" :src="comment.pic" alt="" />
      </div>
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
.login {
  max-width: 70%;
  margin-top: 10px;
  margin-left: 160px;
  max-height: 100% !important;
}
.uk-slideshow-items img {
  width: 900px;
  height: 900px;
  max-height: 100% !important;
  /*height:400px !important;*/
  border: 4px solid white;
}
.uk-dropdown-nav {
  width: 500px;
}
.rcorners {
  border-radius: 25px;
  background: #73ad21;
  padding: 20px;
  width: 400px;
  height: 115px;
  color: black;
}
.tests {
  color: blue;
  font-size: 0.7em;
}
.col {
  color: white;
}

.first {
  margin-left: 6%;
}
.me {
  margin-left: 76%;
}
i {
  margin-right: 15px;
  font-size: 1.1em;
  margin-top: 5px;

}

a {
  font-size: 1.1em;
}
.fa fa-thumbs-up {
  color: blue;
}
.uk-width-auto img {
  width: 45px;
  max-height: 45px;
}
.uk-comment-body p {
  display: inline-block;
}
  .uk-width-medium p{
    padding-bottom: 6px;
  }

</style>

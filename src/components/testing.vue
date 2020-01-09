<template>
    <div>
        <div class="uk-margin-remove-left">
            <div class="uk-card uk-card-default" v-for="dat in data">
                <div class="uk-card-media-top">
                    <div class="uk-inline uk-margin"   >

                        <img :src="dat.meme_image" alt=""  >

                        <div class="uk-position-top uk-overlay uk-overlay-hidden uk-text-center uk-text-center">
                            <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                        </div>
                        <div class="uk-position-bottom uk-overlay uk-overlay-hidden uk-text-center uk-text-center"><p class="uk-text-center me"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p></div>

                    </div>
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Media Top</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "UserProfile",
  data() {
    return {
      image: null,
comment:null,
      progress: null,
        top:null,
        bottom:null,
        data:[]
    };
  },

  methods: {



  },
  created() {
      db.collection('User_Memes')
          .onSnapshot(querySnapshot => {
              querySnapshot.docChanges().forEach(change => {
                  if (change.type === 'added') {
                      this.data.push(change.doc.data());
                  }

              });
          });

  }
};
</script>

<style scoped>



button{
    width:80px
}

    img,button,span{
        margin-left: 30px;
    }
    p{
        font-weight:bold;

    }.uk-grid-small{
    margin-top: 50px;
         }
</style>

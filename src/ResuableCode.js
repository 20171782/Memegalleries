
import db from "@/firebase/init";
import firebase from "firebase";
import {fb} from "@/firebase/init";
export default{

    data() {
          return {
              likes: [],
              meme:[],
              dislikes:[],
              id: firebase.auth().currentUser.uid,
              likemsg:'You liked this image',
              dislikemsg:'You disliked this image'
          };
      },
      firestore(){
          return {
              likes: db.collection('likes'),
              dislikes: db.collection('dislikes'),
              ids:''
          }
      },

      methods: {

          like(ids) {
              var user = firebase.auth().currentUser;

                  db.collection("likes")
                      .doc(ids + this.id )
                      .set({
                          time: Date.now(),
                          user_id: user.uid,
                          Meme_id: ids,
                      });
                  db.collection('dislikes').doc(ids + this.id).delete().then(()=>{
                  }).then(()=>{
                      db.collection('Memes').doc(this.ids).update({
                          likes:this.likenum
                      })
                  })
              },

          dislike(ids) {
              var user = firebase.auth().currentUser;
              if(this.UID){
                  db.collection('dislikes').doc(ids + this.id).delete()
              }else{
                  db.collection("dislikes")
                      .doc(ids + this.id)
                      .set({
                          time: Date.now(),
                          user_id: user.uid,
                          Meme_id:ids
                      });
                  db.collection('likes').doc(ids + this.id).delete().then(()=>{
                      db.collection('Memes').doc(this.ids).update({
                          dislikes:this.dislikenum
                      })
                  })
              }


          }
      },
      computed: {
          likenum() {

              return this.likes.length;

          },
          ID() {
              return this.likes.map((map)=>{
                  map
              })
          },
          dislikenum() {

              return this.dislikes.length;


          },
          UID() {
              return this.dislikes
          },

      },
      mounted() {
          this.$binding("likes", fb.collection("likes"))
              .then((ford) => {
                  this.likes === ford // => __ob__: Observer
              }).catch(err => {
              console.error(err)
          })
          this.$binding("dislikes", fb.collection("dislikes"))
              .then((ford) => {
                  this.dislikes === ford // => __ob__: Observer
              }).catch(err => {
              console.error(err)
          })
          this.$binding("meme", fb.collection("Memes"))
              .then((ford) => {
                  this.meme === ford // => __ob__: Observer
              }).catch(err => {
              console.error(err)
          })
      }
}

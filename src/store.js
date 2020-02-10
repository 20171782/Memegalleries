import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import db from "@/firebase/init";
import router from "@/router";
Vue.use(Vuex);


export default new Vuex.Store({

  state: {
    countries: [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "The Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo, Democratic Republic of the",
      "Congo, Republic of the",
      "Costa Rica",
      "Côte d’Ivoire",
      "Croatia",
      "Cyprus",
      "Czech Republic"
    ],
    categories: [
      { name: "Animated" },

      { name: "Blessings" },
      { name: "Divorce" },
      { name: "Duplicates" },
      { name: "Finance" },
      { name: "Humor" },
      { name: "Ideas" },
      { name: "Inspirational Business" },
      { name: "Love" },
      {name: "Marriage" },
      { name: "Men against Women" },
      { name: "Nutrition" },
      { name: "Political" },
      { name: "Purpose" },

      { name: "Relationship" },
      { name: "Religious" },
      { name: "Romance" },
      { name: "Sports" },

    ],
    Options:['Only Me','Frens','Public'],
    viewProfile: [],
    profile: [],
    id: null,
    name: null,
    Users: [],
    Gallery: [],
    test: router.currentRoute.params.id,
    Emoji: [],
    carousel: [],
    loading: null,
    error:null,
    readMessages: [],
    singleMemes: [],
    likes:[],
    dislikes:[],
    comments:[],
    Memes:[],
    Admin:'',
    UserProfile:[],
    userInfo:[]
  },
  mutations: {
    UserProfiles(state, payload) {
      state.UserProfile.push(payload);
    },

    PROFILE(state, payload) {
      state.profile.push(payload);
    },
    //  View Profile
    ViewProfile(state, payload) {
      state.viewProfile.push(payload);
    },
    gallery(state, payload) {
      state.Gallery = payload;
    },
    USERS(state, payload) {
      state.Users.push(payload);
    },
    ID(state, payload) {
      state.id = payload;
    },
    Emoji(state, payload) {
      state.Emoji.push(payload);
    },
    carousel(state, payload) {
      state.carousel = payload;
    },
    loading(state, payload) {
      state.loading = payload;
    },
    error(state, payload) {
      state.error = payload;
    },
    readMessages(state, payload) {
      state.readMessages = payload;
    },
    singleMeme(state, payload) {
      state.singleMemes = payload;
    },
    fetchLikes(state, payload) {
      state.likes = payload;
    },
   disLikes(state, payload) {
      state.dislikes = payload;
    },
    fetchComments(state, payload){
      state.comments = payload;
    },
    loadedMemes(state, payload){
      state.Memes = payload;
    } ,
    makeAdmin(state, payload){
      state.Admin = payload;
    }
  },

  actions: {

    IsAdmin({ commit}, payload){

      firebase.auth().onAuthStateChanged((user)=> {
        if (user) {
          user.getIdTokenResult().then(token =>{
            console.log(token.claims.admin)
            payload = token.claims.admin
            commit('makeAdmin',payload)
          })

        } else {
          // No user is signed in.
        }
      });
    },

    loadMemes({ commit}, payload){
      db.collection("Memes")
          .onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
              if (change.type === "added") {
                payload.push(change.doc.data());
              }
            });
            commit("loadedMemes", payload);
          });
    },
    fetchComment({ commit}, payload){
      db.collection("message")
          .onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
              if (change.type === "added") {
                payload.push(change.doc.data());
              }
            });
            commit("fetchComments", payload);
          });
    },
    fetchLikes({ commit}, payload) {
      db.collection("likes").onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
              if (change.type === "added") {
                payload.push(change.doc.data());
              }
            });
            commit("fetchLikes", payload);
          });
    },
    disLikes({ commit}, payload) {
      db.collection("dislikes").onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
              if (change.type === "added") {
                payload.push(change.doc.data());
              }
            });
            commit("disLikes", payload);
          });
    },

    carousel({ commit, getters }, payload) {
      commit("loading", true);
      let me = getters.try;
      var id = firebase.auth().currentUser.uid;
      if(me=='Recent'){
        db.collection("Memes").orderBy('timestamp','desc').limit(10)
            .onSnapshot(querySnapshot => {
              querySnapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                  commit("loading", false);
                  payload.push(change.doc.data());
                }
              });
              commit("carousel", payload);
            });
      } else if(me=='myMemes'){
        db.collection("Memes").where('user_id','==',id)
            .onSnapshot(querySnapshot => {
              querySnapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                  commit("loading", false);
                  payload.push(change.doc.data());
                }
              });
              commit("carousel", payload);
            });
      } else if(me=='mostComments'){
          const TwoMonths = 1000 * 60 * 60 * 24 * 60
          var startTime= Date.now() - TwoMonths;
          const endTime = Date.now()
          db.collection('Memes').orderBy('counter','desc').startAt(startTime).limit(10)
            .onSnapshot(querySnapshot => {
              querySnapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                  commit("loading", false);
                  payload.push(change.doc.data());
                }
              });
              commit("carousel", payload);
            });
      } else if(me=='mostLikes'){
          const TwoMonths = 1000 * 60 * 60 * 24 * 60
          var startTime= Date.now() - TwoMonths;
          const endTime = Date.now()
          db.collection('Memes').orderBy('likes','desc').startAt(startTime).limit(10)
            .onSnapshot(querySnapshot => {
              querySnapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                  commit("loading", false);
                  payload.push(change.doc.data());
                }
              });
              commit("carousel", payload);
            });
      } else{
        db.collection("Memes").where('category','==',me).orderBy('timestamp','desc')
            .onSnapshot(querySnapshot => {
              querySnapshot.docChanges().forEach(change => {
                if (change.type === "added") {
                  commit("loading", false);
                  payload.push(change.doc.data());
                }
              });
              commit("carousel", payload);
            });
      }

    },
    Emoji({ commit }, payload) {
      commit("Emoji", payload);
    },
    IDs({ commit }, payload) {
      payload = firebase.auth().currentUser.uid;
      commit("ID", payload);
    },
    //Add Profile Information
    PROFILE({ commit }, payload) {
      var user = firebase.auth().currentUser;
      let crab = {
        name: payload.name,
        address: payload.address,
        age: payload.age,
        image: payload.image,
        stat: payload.stat,
        phone: payload.phone,
        job: payload.job,
        gender: payload.gender,
        id: user.uid,
        alias:payload.alias
      };
      db.collection("Profile")
        .doc(user.uid)
        .set(crab)
        .then(ref => {
          // console.log('Added document with ID: ', ref.id);
        });
      commit("PROFILE", crab);
    },

    //Read Profile Info
    UserProfile({ commit}, payload) {
      var user = firebase.auth().currentUser;
      db.collection("Profile")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            payload.push(doc.data());
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
      commit("UserProfiles", payload);
    },
    ViewProfiles({ commit,getters }, payload) {
      var user = firebase.auth().currentUser;
      var alias=getters.try
      db.collection("Profile")
        .where('alias','==',alias)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            payload.push(doc.data());
          });
        })
        .catch(error => {
          console.log("Error getting documents: ", error);
        });
      commit("ViewProfile", payload);
    },

    Images({ commit }, payload) {
      var user = firebase.auth().currentUser;

      db.collection("Memes")
        .add({
          images: payload
        })
        .then(ref => {
          console.log("Added document with ID: ", ref.id);
        });
      commit("Images", payload);
    },

    ViewImages({ commit }, payload) {
      commit("loading", true);
      var crab = [];
      var observer = db
        .collection("Memes").where('privacy','==','Public')
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              commit("loading", false);
              crab.push(change.doc.data());
            }
          });

          commit("gallery", crab);
        });
    },
    //Users
    Users({ commit }, users) {
      let id=firebase.auth().currentUser.uid
      db.collection("Profile").where('id','<',id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              users.push(doc.data());
            });
          });
      db.collection("Profile").where('id','>',id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            users.push(doc.data());
          });
        });

      commit("USERS", users);
    },
    //  Read Message

    readMessages({ commit, getters }, payload) {
      commit("loading", true);
      db.collection("message")
        .where("Meme_id", "==", getters.try)
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              commit("loading", false);
              payload.unshift(change.doc.data());
              // this.time=moments(change.doc.data().time).format('lll');
            }
          });
          commit("readMessages", payload);
        });
    },

    //load Single Memes
    SingleMemes({ commit, getters }, payload) {
      commit("loading", true);
      db.collection("Memes")
        .where("Meme_id", "==", getters.try)
        // .orderBy("time")
        .onSnapshot(querySnapshot => {
          querySnapshot.docChanges().forEach(change => {
            if (change.type === "added") {
              commit("loading", false);
              payload.push(change.doc.data());
            }
          });
          // commit(" singleMeme", payload);
        });
    }
  },

  getters: {
    Categories(state) {
      return state.cat
    }
    ,
    try(state) {
      return state.RouteModule.params.id;
    },
    loading(state) {
      return state.loading;
    }
  }
});

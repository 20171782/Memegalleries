<template>
    <div  class="top ">
<navbar></navbar>
        <top></top>
        <div class="uk-container uk-text-center upper">

<!--            <div v-if="!image" @click="photo">-->
<!--                <img src="https://cdn.pixabay.com/photo/2017/07/11/10/43/upload-2493114__340.png" alt="">-->
<!--            </div>-->
<!--            <div class="uk-height-medium   uk-background-cover uk-light" v-else-->
<!--                 :data-src="image"  style="margin: 50px"   uk-img >-->
<!--                <h3 class="uk-text-center" v-bind:style="{ color: selected_color,fontSize:font_size }" style="font-weight: bold;font-size: 4.0em ">{{top}}</h3>-->
<!--                <h3 class="uk-text-center" v-bind:style="{ color: selected_color ,fontSize: font_size}" style="font-weight: bold;font-size: 4.0em;margin-top: 120px">{{bottom}}</h3>-->

<!--            </div>-->



           <div class="uk-card  ">
               <div class="uk-inline uk-margin"  v-for="select_meme in select_memes" >

                   <img :src="select_meme.image" alt=""  >

                   <div class="uk-position-top uk-overlay uk-overlay-hidden uk-text-center uk-text-center">
                       <h2 class=" " v-bind:style="{ color: selected_color,fontSize:font_size + 'px' }" style="font-weight: bold;font-size: 4.0em ;">{{top}}</h2>
                   </div>
                   <div class="uk-position-bottom uk-overlay uk-overlay-hidden uk-text-center uk-text-center">   <h2 class=" " v-bind:style="{ color: selected_color ,fontSize: font_size + 'px'}" style="font-weight: bold;font-size: 4.0em;margin-top: 100px">{{bottom}}</h2></div>


               </div>
           </div>


            <form @submit.prevent=""  class="uk-margin-remove">

                <fieldset class="uk-fieldset">
                    <div>
                        <div>
                            <input
                                    type="file"
                                    ref="uploads"
                                    @change="upload"
                                    style="display: none"
                            />
                        </div>

                        <div class="form-row upper ">
                            <div class="col">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" >{{max - top.length}}</div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Top" v-model="top" :maxlength="10">
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-group mb-2">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text" >{{max - bottom.length}}</div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Down" v-model="bottom" :maxlength="10">
                                </div>
                            </div>

                            </div>
                            <br> <br>




                            <div class="uk-child-width-1-2@l uk-grid-small uk-grid-match" uk-grid>
                                <div class="col">
                                    <p class="color-box uk-align-left uk-margin-remove-left" :style="{background:col}" v-for="col in colors" @mouseover="mouse(col)"></p>
                                </div>

<!--                                <div class="">-->
<!--                                    <select class="form-control"  v-model="cat">-->
<!--                                        <option v-for="cate in Cats  " >{{cate.name}}</option>-->

<!--                                    </select>-->
<!--                                </div>-->

<!--                                   <div class="">-->
<!--                                       <select class="form-control"  v-model="font_size">-->
<!--                                           <option v-for="font in Font_Size  " >{{font}}px</option>-->

<!--                                       </select>-->
<!--                                   </div>-->
                                <div class="uk-margin">
                                    <input class="uk-range" type="range"  min="20" max="50" step="1" v-model="font_size">
                                </div>
                                <div style="padding-top: 10px">
                                    <button  @click="confirm" type="submit" class="btn btn-primary uk-align-left" >Save</button>
                                </div>
                            </div>







<!--                        <div class="row">-->
<!--                            <div class="">-->

<!--                                <span v-if="progress">{{ progress }}</span>-->

<!--                            </div>-->


<!--                            <div class="">-->
<!--                                <button style="margin-left: 10px"-->
<!--                                        @click="Save"-->
<!--                                        class=" uk-button uk-button-secondary"-->
<!--                                >-->
<!--                                    Save-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </fieldset>
            </form>

            <div class="tops" uk-filter="target: .js-filter">

                <ul class="uk-subnav uk-subnav-pill">
                    <li  uk-filter-control=".animated"><button type="submit" class="btn btn-primary">Animated</button></li>
                    <li uk-filter-control=".blessing"><button type="submit" class="btn btn-primary">Blessings</button></li>
                    <li uk-filter-control=".divorce"><button type="submit" class="btn btn-primary">Divorce</button></li>
                    <li uk-filter-control=".duplicates"><button type="submit" class="btn btn-primary">Duplicates</button></li>
                    <li uk-filter-control=".finance"><button type="submit" class="btn btn-primary">Finance</button></li>
                    <li uk-filter-control=".business"><button type="submit" class="btn btn-primary">Business</button></li>
                    <li uk-filter-control=".love"><button type="submit" class="btn btn-primary">Love</button></li>
                    <li uk-filter-control=".marriage"><button type="submit" class="btn btn-primary">Marriage</button></li>
                    <li uk-filter-control=".nutrition"><button type="submit" class="btn btn-primary">Nutrition</button></li>
                    <li uk-filter-control=".political"><button type="submit" class="btn btn-primary">Political</button></li>
                    <li uk-filter-control=".purpose"><button type="submit" class="btn btn-primary">Purpose</button></li>
                    <li uk-filter-control=".relationship"><button type="submit" class="btn btn-primary">Relationship</button></li>
                    <li uk-filter-control=".religious"><button type="submit" class="btn btn-primary">Religious</button></li>
                    <li uk-filter-control=".roman"><button type="submit" class="btn btn-primary">Roman</button></li>
                    <li uk-filter-control=".sports"><button type="submit" class="btn btn-primary">Sports</button></li>



                </ul>

                <ul class="js-filter  uk-child-width-1-3@m " uk-grid>

                    <!--Animated Memes   -->
                    <li class="animated" v-for="dat in animated">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-position-top uk-overlay uk-overlay-hidden uk-text-center uk-margin-remove-top"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-position-bottom uk-overlay uk-overlay-hidden uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li>
                    <!-- Loved Memes    -->
                    <li class="love" v-for="dat in love">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li>

                    <!--Blessing memes-->
                    <li class="blessing" v-for="dat in blessings">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li>
                    <li class="divorce" v-for="dat in divorce">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="duplicates" v-for="dat in duplicates">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="finance" v-for="dat in finance">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="business" v-for="dat in business">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="marriage" v-for="dat in marriage">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="nutrition" v-for="dat in nutrition">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="political" v-for="dat in political">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="purpose" v-for="dat in purpose">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="relationship" v-for="dat in relationship">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="religious" v-for="dat in religious">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="romance" v-for="dat in romance">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li><li class="sports" v-for="dat in sports">
                        <div class="uk-card "> <div class="uk-card  uk-width-1-1@m">
                            <div class=" uk-grid-small uk-grid-match uk-margin uk-container" >
                                <div  >
                                    <div @click="press(dat.Meme_ID,dat.image)"  class="uk-height-medium   uk-background-cover uk-light"
                                         :data-src="dat.image"   uk-img >
                                        <p class="uk-text-center"  v-bind:style="{ color: dat.color ,fontSize: dat.font}" >{{dat.top}}</p>
                                        <p class="uk-text-center"   v-bind:style="{ color: dat.color ,fontSize: dat.font}">{{dat.bottom}}</p>

                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                        {{dat.cat}}
                    </li>






                </ul>

            </div>
        </div>


    </div>
</template>

<script>
    import db from "@/firebase/init";
    import firebase from "firebase";
    export default {
        name: "MemeGenerator",
        data() {
            return {
                image: null,
                max:10,
                comment:null,
                progress: null,
                top:'',
                bottom:'',
                data:[],
                animated:[],
                love:[],
                blessings:[],
                divorce:[],
                finance:[],
                business:[],
                marriage:[],
                nutrition:[],
                political:[],
                purpose:[],
                relationship:[],
                religious:[],
                romance:[],
                sports:[],
                humor:[],
                idea:[],
                duplicates:[],
                select_memes:null,
                selected_color:null,
                colors:['red','blue','green','white','orange','purple','yellow',],
                font_size:null,
                id: firebase.auth().currentUser.uid,
               cat:null,



            };


        },
        computed: {
            Font_Size() {
                var cars = [];
                for (let i = 20; i < 60; i+=5) {
                    cars.push(i)
                }
                return cars;
            },
            SelectedMemeId(){
                return this.select_memes[0].meme_id
            },SelectedImage(){
                return this.select_memes[0].image
            },
            Cats() {
                return this.$store.state.categories
            },

            Tops(){
                var value
                if (String(value).length <= 10) {
                    this.top = value
                }
            }
        },

        methods: {
            mouse(col){
            this. selected_color = col
            },
            press(meme_id,image){
                db.collection('SelectMemes').doc("selected_meme").set({
                    meme_id:meme_id,
                    image:image,
                    id:this.id

                })

            },
            confirm(){
               const crab = {
                         image:this.SelectedMemeId,
                        meme_image:this.SelectedImage,
                        id:this.id,

                        color:this.selected_color,
                        font:this.font_size,
                        top:this.top,
                        bottom:this.bottom
                }
                console.log(crab)
                db.collection('User_Memes').add(crab)
                    .then(()=>{
                    this.$router.push('/testing')
                })
            },
            Save() {
                db.collection('Generator').add({
                    image:this.image,
                    top:this.top,
                    bottom:this.bottom,
                    color:this.selected_color,
                    font:this.font_size,
                    cat:this.cat
                }) .then(ref => {
                    db.collection("Generator")
                        .doc(ref.id)
                        .update({
                            Meme_ID: ref.id
                        });
                });
            },

            photo() {
                this.$refs.uploads.click();
            },
            upload(e) {
                let file = e.target.files[0];
                var storageRef = firebase.storage().ref("MemeGenerator/" + file.name);
                var uploadTask = storageRef.put(file);

                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        var progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        this.progress = Math.round(progress) + "%";
                    },
                    error => {},
                    () => {
                        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                            this.image = downloadURL;
                            console.log(this.image);
                        });
                    }
                );
            }
        },
        created() {
            db.collection('Generator').where('cat', '==','Blessings' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.blessings.push(change.doc.data());
                        }

                    });
                }); db.collection('Generator').where('cat', '==','Animated' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.animated.push(change.doc.data());
                        }

                    });
                }); db.collection('Generator').where('cat', '==','Love' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.love.push(change.doc.data());
                        }

                    });
                });
                db.collection('Generator').where('cat', '==','Divorce' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.divorce.push(change.doc.data());
                        }

                    });
                }); db.collection('Generator').where('cat', '==','Duplicates' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.duplicates.push(change.doc.data());
                        }

                    });
                });db.collection('Generator').where('cat', '==','Finance' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.finance.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Humor' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.humor.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Ideas' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.duplicates.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Business' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.business.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Marriage' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.marriage.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Nutrition' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.nutrition.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Political' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.political.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Purpose' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.purpose.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Relationship' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.relationship.push(change.doc.data());
                        }

                    });
                });;db.collection('Generator').where('cat', '==','Duplicates' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.duplicates.push(change.doc.data());
                        }

                    });
                });db.collection('Generator').where('cat', '==','Religious' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.religious.push(change.doc.data());
                        }

                    });
                });db.collection('Generator').where('cat', '==','Romance' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.romance.push(change.doc.data());
                        }

                    });
                });db.collection('Generator').where('cat', '==','Sports' )
                .onSnapshot(querySnapshot => {
                    querySnapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.sports.push(change.doc.data());
                        }

                    });
                });




            this.$binding("select_memes", db.collection("SelectMemes"))
                .then((ford) => {
                    this.select_memes === ford // => __ob__: Observer
                }).catch(err => {
                console.error(err)
            })

        }
    };
</script>

<style scoped>

img{
    width: 400px;
    height: 400px;
}

    button{
        width:80px;background: #009b3a !important;
        margin-top: 10px;

    }

li button{
    font-size: 0.9em !important;
    width:100px;
    color:white !important;
}
    .selectMeme{

    }.top{
             background-color: #e0e0e0;
         }
    .tops{
        margin-bottom: 100px;
    }
    .color-box{
        width:40px;
        height: 40px;
    }
 .col   p{list-style: none;
    display:inline-block;
    margin: 3px}
.upper{
    margin-top: 50px;
}
    h2{
        font-weight: bold;
        color:white
    }
    .input-group-text{
        background: darkgray;
        font-weight: bold;
    }
</style>

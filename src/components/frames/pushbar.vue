<template>
    <div class="container">


        <div class="row">
            <div class="col-sm-4 col-md-3 sidebar">
                <div class="mini-submenu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </div>
                <div class="list-group">
        <span href="#" class="list-group-item active">
            Submenu
            <span class="pull-right" id="slide-submenu">
                <i class="fa fa-times"></i>
            </span>
        </span>
                    <a href="#" class="list-group-item">
                        <i class="fa fa-comment-o"></i> Lorem ipsum
                    </a>
                    <a href="#" class="list-group-item">
                        <i class="fa fa-search"></i> Lorem ipsum
                    </a>
                    <a href="#" class="list-group-item">
                        <i class="fa fa-user"></i> Lorem ipsum
                    </a>
                    <a href="#" class="list-group-item">
                        <i class="fa fa-folder-open-o"></i> Lorem ipsum <span class="badge">14</span>
                    </a>
                    <a href="#" class="list-group-item">
                        <i class="fa fa-bar-chart-o"></i> Lorem ipsumr <span class="badge">14</span>
                    </a>
                    <a href="#" class="list-group-item">
                        <i class="fa fa-envelope"></i> Lorem ipsum
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import functions from "@/firebase/init";
    import firebase from "firebase";

    export default {

        name: "pushbar",
        data(){
            return {

                email:'',
                admin:''
            }
        },
        methods:{

            AddToAmin(){

                const func = firebase.functions();
             const adminRoles = func.httpsCallable('addAdminRole');
                adminRoles({email:this.email}).then((result) =>{
                    console.log(result)
                })
            }
        },
        computed:{
       Admin(){
           return this.$store.state.Admin
       }
        },
        created() {
            this.$store.dispatch('IsAdmin')
        }


    }
</script>

<style scoped>

    .mini-submenu{
        display:none;
        background-color: rgba(0, 0, 0, 0);
        border: 1px solid rgba(0, 0, 0, 0.9);
        border-radius: 4px;
        padding: 9px;
        /*position: relative;*/
        width: 42px;

    }

    .mini-submenu:hover{
        cursor: pointer;
    }

    .mini-submenu .icon-bar {
        border-radius: 1px;
        display: block;
        height: 2px;
        width: 22px;
        margin-top: 3px;
    }

    .mini-submenu .icon-bar {
        background-color: #000;
    }

    #slide-submenu{
        background: rgba(0, 0, 0, 0.45);
        display: inline-block;
        padding: 0 8px;
        border-radius: 4px;
        cursor: pointer;
    }
</style>

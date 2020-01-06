<template>

    <div class=" " style="padding-top: 20px">
        <h3 class="uk-text-center uk-text-bold">Explore</h3>

        <div class="uk-width-small  uk-margin uk-align-center "><pro></pro></div>
<!--        <div class="uk-width-small  uk-margin uk-align-center"><sidebar></sidebar></div>-->

        <div class=" uk-width-small  uk-margin uk-align-center"><notification></notification></div>

        <div class="uk-width-small uk-margin uk-align-center"><requests></requests></div>

        <div class="uk-width-small uk-margin uk-align-center"><upload></upload></div>


        <div class="uk-width-small uk-margin uk-align-center">
            <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                    <img :src=" '/' + images " alt="">
                </div>
                <div class="uk-width-expand" style="padding-left: 34px" >
                    <span class="uk-text-bold" >Profile</span>
                </div>
            </div>
        </div>



        <div class=" jump uk-width-small uk-margin uk-align-center "><button style="width: 100%" type="button" class="btn btn-success">Meme Generator</button></div>



    </div>
</template>

<script>
    import cor from '@/components/frames/corousel'
    export default {
        name: "Grid",
        components: {
            cor,
    },
        data(){
            return{
                images:'user.svg'
            }
        }

    }
</script>

<style scoped>
i{
    font-size: 20px;
    color: black;
}
.uk-width-small{
    margin-top: 20px;
}

.uk-width-small div:hover{
    background-color: white;
    padding:10px;
    border-radius: 10px;
    width: 100%;
    opacity: 0.5;
}.me:hover{
    background-color: white;

     width: 100%;opacity: 0.5;
}
.first
{
    background-color:white;
    padding:10px;
    border-radius: 10px;opacity: 0.5;
}
    img{
        width:30px;
        height: 30px;
    }
.jump{
;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-5px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-8px); }
}
</style>

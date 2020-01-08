<template>
    <div>

        <div class="hero">

            <div class="container ">
                <imags></imags>
            </div>
        </div>
    </div>
</template>
<script>
    import imags from '@/components/frames/Images'
    export default {
        name: "gallery",
        components:{
            imags
        }
    }
</script>

<style scoped>

    img{
        width:500px
    }
</style>

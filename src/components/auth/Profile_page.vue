<template>
<div>
    <div  >
        <div  class="uk-visible@m uk-child-width-1-3@m  uk-grid-divider uk-margin-remove"   uk-grid>
            <div>
                <div class="uk-card uk-align-center">
                    <Grid></Grid>
                </div>
            </div>
            <div class="" >
                <div class="scroll" style="height: 500px;overflow: auto;" >
                    <profile></profile>
                </div>
            </div>
            <div>
                <div class="uk-card ">
                    <frens></frens>
                </div>
            </div>

        </div>
        <div style=" background: #e9ebee;max-height: 1000px">
            <hr class="uk-margin-remove">
            <div >
                <topMemes></topMemes>
                <timestamp></timestamp>

            </div>
        </div>
        <div class="uk-hidden@m">
            <Grid></Grid>
            <frens></frens>
        </div>


    </div>
</div>
</template>

<script>
    export default {
        name: "Profile_page"
    }
</script>

<style scoped>
    .scroll::-webkit-scrollbar {
        display: none;
    }
</style>

<template>
    <div class="recipe-card col-xs-12 col-sm-6 col-md-4">

            <div class="card">
                    <img v-bind:src="singleRecipe.thumbnail" alt="" class="img-fluid image">
                    <div class="card-body">
                        <h2 class="card-title">{{ singleRecipe.title }}</h2>

                        <hr>
                        
                        <h4> Ingredients:</h4>
                        <b> {{ singleRecipe.ingredients }}</b> <br><br>
                       
                        <div class="description">
                             <a v-bind:href="singleRecipe.href"> {{ singleRecipe.href }}</a>
                        </div>
                    </div>
            </div>

    </div>
</template>


<script>
export default {
        name:'RecipeCard',
        props:['singleRecipe'],
        created(){
            console.log("teet")
            //Input stuff here
        }
};
</script>




<style scoped>
    .card{
        margin-bottom: 35px;
        border: 1px solid lightgray;
        min-height: 600px;
        max-height: 600px;
    }
    .image{
        height: 250px;
        min-height: 250px;
    }
    .description{
        max-height: 175px;
        overflow-y: hidden;
        padding: 10px;
    }
</style>
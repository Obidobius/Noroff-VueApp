<template>
    <div id="recipe-list" class="col-sm-12"> 
        <h2 class="text-center">Food and Drink Recipes</h2>
    <div class="row">
        <recipe-card v-for="recipe in recipes" v-bind:key="recipe.id" v-bind:single-recipe="recipe"></recipe-card>
    </div>
    

    </div>
</template>

<script>
import RecipeCard from './RecipeCard';
export default {
    name:"RecipeList",
    components:{
        RecipeCard
    },
    props:[
        "recipes"
    ]
    
    
}
</script>

<style>
    h2{
        padding: 20px;
    }
</style>

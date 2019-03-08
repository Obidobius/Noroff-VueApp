<template>
    <div class="container">
        <recipe-list v-bind:recipes="allRecipes"></recipe-list>
    </div>

</template>


<script>
import RecipeList from '../recipes/RecipeList';

export default {
    name:'RecipePage',
        components: {
            RecipeList
        },
        created(){
                //Recipes
                const conversionUrl = 'https://cors-anywhere.herokuapp.com/';
                const url ='http://www.recipepuppy.com/api/';

                 fetch(`${conversionUrl}${url}`).then(response => response.json())
                .then(data => {
                this.allRecipes = data.results;
                console.log(data.results);
                 })
            .catch(err =>{
                console.error(err);
            });
    },
    data(){
        return{
            allRecipes:[]
        }
    }
}
</script>



<style scoped>
</style>

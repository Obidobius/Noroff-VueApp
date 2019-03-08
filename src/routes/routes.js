import Vue from 'vue'
import VueRouter from 'vue-router';
import RecipePage from '../components/containers/RecipePage';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path:'/',
        name:'recipes',
        component: RecipePage
    }]
});

export default router;
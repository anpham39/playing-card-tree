import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/home.vue';


Vue.use(VueRouter);


export default new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/:cardId?',
            name: 'Home',
            component: Home,
            props: route => ({
                cardId: route.params.cardId || null,
            }),
        },
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

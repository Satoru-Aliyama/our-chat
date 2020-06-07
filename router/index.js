import Vue from 'vue'
import Router from 'vue-router';

const Welcome = () => import (/* webpackChunkName:"Welcome"*/ '../components/Welcome.vue');
const Chat = () => import (/* webpackChunkName;"Chat"*/ '../components/Chat.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Welcome',
            component: Welcome,
        },
        {
            path:'/chat',
            name: 'Chat',
            component: Chat,
            props: true,
            beforeEnter: (to, from, next) => {
                if(to.params.name) {
                    next();
                } else {
                    next({name: 'Welcome'});
                }
            }
        }
    ]
})
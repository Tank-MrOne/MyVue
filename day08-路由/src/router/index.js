import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home'
import About from '../views/About'
import Message from '../views/Message'
import News from '../views/News'
import MessageDetail from '../views/MessageDetail'
import NewsDetail from '../views/NewsDetail'
export default new VueRouter({
    mode: 'history',
    routes : [
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home/news',
                    component:News,
                    children:[
                        {
                            path:'/home/news/info:newsId',
                            component:NewsDetail,
                            props(route){
                                return {
                                    newsId:route.params.newsId,
                                    newsName:route.query.newsName
                                }
                            }
                        }
                    ]
                },
                {
                    path:'/home/message',
                    component : Message,
                    children:[
                        {
                            path:'/home/message/info:msgId',
                            component:MessageDetail,
                            name:'messageInfo',
                            props(route){
                                return {
                                    msgId:route.params.msgId,
                                    msgValue:route.query.msgValue
                                }
                            }
                        }
                    ]
                },
                {
                    path:'/home',
                    redirect:'/home/message'
                }
                
            ]
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})
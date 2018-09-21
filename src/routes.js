import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LayoutPage from './pages/Layout.Page';
import LoginPage from './pages/Login.Page';


const routers = [
    {
        path:'/login',
        exact:true,
        component:LoginPage
    },
    {
        path:'/register',
        exact:true,
        //component:RegisterComponent
    },
    {
        path:'/',
        component:LayoutPage,
        routes:[
            {
                path:'/homepage',
                exact:true,
                component:HomePage
            },
            // {
            //     path:'/keywords',
            //     exact:true,
            //     component:KeywordsContainer
            // },
            // {
            //     path:'/addKeyword/:id?',
            //     exact:true,
            //     component:KeywordContainer
            // }
        ]
    }
]

export default routers
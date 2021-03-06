import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LayoutPage from './pages/Layout.Page';
import LoginPage from './pages/Login.Page';
import KeywordsContainer from './containers/keywords.Container';
import AddKeywordContainer from './containers/addKeyword.Container';
import UsersComponent from './components/User/users.Component';
import UserModifyComponent from './components/User/userModify.Component';
const routers = [
    {
        path:'/login',
        component:LoginPage
    },
    {
        path:'/register',
        //component:RegisterComponent
    },
    {
        path:'/',
        component:LayoutPage,
        routes:[
            {
                path:'/homepage',
                component:HomePage
            },
            {
                path:'/keyword/keywords',
                component:KeywordsContainer
            },
            {
                path:'/addKeyword/:id?',
                component:AddKeywordContainer
            },
            {
                path:'/users',
                component:UsersComponent
            }
        ]
    }
]

export default routers
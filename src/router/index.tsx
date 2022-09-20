import React, { lazy, Suspense } from 'react'

import App from 'App'
import Loading from "../components/loading";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// 定义数组每一项的接口
interface IRoute {
    path: string;
    component: React.FC;
    children?: IRoute[]
}

const router_arr: IRoute[] = [
    {
        path: '/',
        component: App,
        children: [
            {
                path: 'list',
                component: lazy(()=>  import('pages/List'))
            },
            {
                path: 'edit',
                component: lazy(()=>  import('pages/Edit'))
            },
        ]
    },
    {
        path: '/login',
        component: lazy(()=>import('pages/Login'))
    },
    {
        path: '/register',
        component: lazy(()=>import('pages/Register'))
    }
]

const MyRouter = ()=> {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {
                        router_arr.map(item=> (
                            <Route key={ item.path } path={ item.path } element={ <item.component/>}>
                                {
                                    item.children? item.children.map(item2=> (
                                        <Route key={ item2.path } path={ item2.path } element={<item2.component/>}></Route>
                                    )):null
                                }
                            </Route>
                        ))
                    }
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default MyRouter
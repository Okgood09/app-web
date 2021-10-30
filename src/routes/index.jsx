import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { LinearProgress } from '@mui/material'

import Layout from '../components/layout/layout'
import ListUser from '../containers/users/list'

const MAP_ROUTE = [
    { path: '/', exact: true, redirect: '/app' },
    {
        path: '/app',
        component: Layout,
        routes: [
            {
                path: '/app/users',
                component: ListUser
            }
        ]
    }
]

export default function RoutesConfig() {
    return <BrowserRouter>
        <Suspense fallback={<LinearProgress />}>
            <Switch>
                {
                    MAP_ROUTE.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)
                }
            </Switch>
        </Suspense>
    </BrowserRouter>
}

export function RouteWithSubRoutes(route) {
    return <Route
        path={route.path}
        exact={route.exact}
        render={(props) => {
            if (route.redirect) {
                return <Redirect to={{ pathname: `${route.redirect}`, state: `${props.location}` }} />
            }
            return <route.component {...props} routes={route.routes} />
        }}
    />
}
import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { LinearProgress } from '@mui/material'

import AuthService from '../services/auth.service'
import Layout from '../components/layout/layout'
import Home from '../containers/home/home'
import Login from '../containers/auth/login'
import ListUser from '../containers/users/list'
import Account from '../containers/users/account'

const MAP_ROUTE = [
    { path: '/', exact: true, redirect: '/app/home' },
    { path: '/authenticate', exact: true, component: Login },
    {
        path: '/app',
        private: true,
        strict: true,
        component: Layout,
        routes: [
            { path: '/app', exact: true, redirect: '/app/home' },
            {
                path: '/app/home',
                exact: true,
                component: Home
            },
            {
                path: '/app/users',
                exact: true,
                component: ListUser
            },
            {
                path: '/app/account',
                exact: true,
                component: Account
            }
        ]
    }
]

export const RouteWithSubRoutes = (route) => <Route
    path={route.path}
    exact={route.exact}
    render={props => {
        if (route.private && !AuthService.isAuthenticated()) {
            return <Redirect
                to={{
                    pathname: '/authenticate',
                    state: { from: props.location }
                }}
            />
        }

        if (route.redirect) {
            return <Redirect to={{
                pathname: `${route.redirect}`,
                state: { from: props.location }
            }} />
        }

        return <route.component {...props} exact={true} routes={route.routes} />
    }}
/>

export default function RoutesConfig({ history }) {
    return <ConnectedRouter history={history}>
        <Suspense fallback={<LinearProgress />}>
            <Switch>
                {
                    MAP_ROUTE.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)
                }
            </Switch>
        </Suspense>
    </ConnectedRouter>
}

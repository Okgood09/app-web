import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { LinearProgress } from '@mui/material'

import AuthService from '../services/auth.service'

// Components lazy
const Layout = lazy(() => import('../components/layout/layout'))
const Home = lazy(() => import('../containers/home/home'))
// Components imports
const BugReport = lazy(() => import('../containers/pages/bugReport'))
const ListUser = lazy(() => import('../containers/users/list'))
const Account = lazy(() => import('../containers/users/account'))

const MAP_ROUTE = [
    { path: '/', exact: true, component: BugReport, redirect: '/app' },
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

        console.log('PROPS & ROUTE', props, route)
        if (route.private && !AuthService.isAuthenticated()) {
            return <Redirect
                to={{
                    pathname: '/',
                    state: { from: props.location }
                }}
            />
        }

        if (route.redirect && AuthService.isAuthenticated()) {
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
        <Suspense fallback={<LinearProgress sx={{ height: 8 }} />}>
            <Switch>
                {
                    MAP_ROUTE.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)
                }
            </Switch>
        </Suspense>
    </ConnectedRouter>
}

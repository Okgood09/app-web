import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Layout from '../components/layout'
import Contact from '../components/pages/contact'
import Counter from '../components/pages/counter'
import Home from '../components/pages/home'

export const MAP_ROUTE = [
    {
        path: "/counter",
        component: Counter
    },
    {
        path: "/layout",
        component: Layout,
        routes: [
            {
                path: "/layout/home",
                component: Home
            },
            {
                path: "/layout/contact",
                component: Contact
            },
            {
                path: "/layout/counter",
                component: Counter
            },
        ]
    }
]


export default function RoutesConfig() {
    console.log('layout')
    return <BrowserRouter>
        <ul>
            <li>
                <Link to="/layout">Layout</Link>
            </li>
        </ul>
        <Switch>
            {
                MAP_ROUTE.map((route, index) => {
                    return <RouteWithSubRoutes key={index} {...route} />
                })
            }
        </Switch>
    </BrowserRouter>
}

export function RouteWithSubRoutes(route) {
    console.log('RouteWithSubRoutes')
    return <Route
        path={route.path}
        exact={route.exact}
        render={(props) => {
            return <route.component {...props} routes={route.routes} />
        }}
    />
}
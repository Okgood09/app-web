import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Contact from '../components/pages/contact'
import Counter from '../components/pages/counter'
import Home from '../components/pages/home'

export const MAP_ROUTE = [
    {
        path: '/home',
        private: true,
        exact: true,
        component: Home
    },
    {
        path: '/contact',
        private: true,
        exact: true,
        component: Contact
    },
    {
        path: '/counter',
        private: true,
        exact: true,
        component: Counter
    }
]


export default function Routes() {
    return <BrowserRouter>
        <Switch>
            {
                MAP_ROUTE.map(route => <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    render={(props) => {
                        if (route.redirect) {
                            return (
                                <Redirect
                                    to={{
                                        pathname: `${route.redirect}`,
                                        state: { from: props.location }
                                    }}
                                />
                            )
                        }
                        return <route.component
                            {...props}
                            exact={route.exact}
                            routes={route.routes}
                        />
                    }}
                />)
            }
        </Switch>
    </BrowserRouter>
}
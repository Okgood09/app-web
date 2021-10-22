import { Link, Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '../routes'

export default function Layout({ routes }) {
    console.log('routes', routes)
    return (
        <div>
            <h2>Layout</h2>
            <ul>
                <li>
                    <Link to="/layout/home">Bus</Link>
                </li>
                <li>
                    <Link to="/layout/contact">Cart</Link>
                </li>
                <li>
                    <Link to="/layout/counter">Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
            </Switch>
        </div>
    );
}
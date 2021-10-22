import { Fragment } from 'react'
import { useHistory } from 'react-router'

export default function Home() {

    const history = useHistory()

    return <Fragment>
        <div>Você está na página home...</div>
        <button onClick={() => history.push('/contact')}>Contatos</button>
    </Fragment>

}
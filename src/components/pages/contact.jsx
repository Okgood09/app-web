import { Fragment } from 'react'
import { useHistory } from 'react-router'

export default function Contact() {

    const history = useHistory()

    return <Fragment>
        <div>Você está na página contact...</div>
        <button onClick={() => history.push('/counter')}>Contador</button>
    </Fragment>

}
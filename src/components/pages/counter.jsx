import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import {
    decrement,
    increment
} from '../../store/features/counter'

export default function Counter(props) {

    const history = useHistory()

    const count = useSelector((state) => {
        return state.counter
    })

    const dispatch = useDispatch()

    console.log('count', props.name)
    return <div>
        <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}>
            Increment
        </button>
        <h1>{count.value.valor}</h1>
        <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}>
            Decrement
        </button>

        <button onClick={() => history.push('/home')}>Início</button>
    </div>
}
import {useDispatch} from 'react-redux';
import {useState} from 'react';


function PizzaItem (props) {
    const dispatch=useDispatch();
    
    const [pizzaState, setPizzaState] = useState(true)
    const handlePizzaAdd = event => {
        event.preventDefault();
        dispatch({type:'', payload: props.id });
        setPizzaState(!pizzaState);
    }
    const handlePizzaRemove = event => {
        event.preventDefault();
        dispatch({type:'', payload: props.id});
        setPizzaState(!pizzaState);
    }
    return(
        pizzaState ? (
            <section>
                {/* Image here? */}
                <p>{props.name}</p>
                <p>{props.description}</p>
                <a>{props.price}</a>
                <button onClick={handlePizzaAdd}>Add</button>
            </section>
        ) : (
            <section>
                {/* Image here? */}
                <p>{props.name}</p>
                <p>{props.description}</p>
                <a>{props.price}</a>
                <button onClick={handlePizzaRemove}>Remove</button>
            </section>
        )
    )
}

export default PizzaItem;
import {useDispatch} from 'react-redux';
import {useState} from 'react';


function PizzaItem () {
    const dispatch=useDispatch();
    const [pizzaState, setPizzaState] = useState(true)
    const handlePizzaAdd = event => {
        event.preventDefault();
        dispatch({type:'ADD_PIZZA', payload: pizza });
        setPizzaState(!pizzaState);
    }
    const handlePizzaRemove = event => {
        event.preventDefault();
        dispatch({type:'REMOVE_PIZZA', payload: pizza});
        setPizzaState(!pizzaState);
    }
    return(
        pizzaState ? (
            <section>
                {/* Image here? */}
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <a>{pizza.price}</a>
                <button onClick={handlePizzaAdd}>Add</button>
            </section>
        ) : (
            <section>
                {/* Image here? */}
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <a>{pizza.price}</a>
                <button onClick={handlePizzaRemove}>Remove</button>
            </section>
        )
    )
}

export default PizzaItem;
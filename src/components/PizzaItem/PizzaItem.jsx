import {useDispatch} from 'react-redux';
import {useState} from 'react';
import './PizzaItem.css';

function PizzaItem (props) {
    const dispatch=useDispatch();
    
    const [pizzaState, setPizzaState] = useState(true)
    const handlePizzaAdd = event => {
        event.preventDefault();
        dispatch({type:'ADD_TO_CART', payload: props.pizza });
        console.log(props.pizza);
        setPizzaState(!pizzaState);
    }
    const handlePizzaRemove = event => {
        event.preventDefault();
        dispatch({type:'REMOVE_PIZZA', payload: props.id});
        setPizzaState(!pizzaState);
    }
    return(
        pizzaState ? (
            <section>
                <img src={props.image_source} alt={props.name} />
                <p>{props.name}</p>
                <p>{props.description}</p>
                <a>{props.price}</a>
                <button onClick={handlePizzaAdd}>Add</button>
            </section>
        ) : (
            <section>
                <img src={props.image_source} alt={props.name} />
                <p>{props.name}</p>
                <p>{props.description}</p>
                <a>{props.price}</a>
                <button onClick={handlePizzaRemove}>Remove</button>
            </section>
        )
    )
}

export default PizzaItem;
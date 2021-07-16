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
        console.log('Pizza deleted',props.pizza);
        dispatch({type:'REMOVE_PIZZA', payload: props.pizza});
        setPizzaState(!pizzaState);
    }
    return(
        pizzaState ? (
            <section className="pizzaCard">
                <img src={props.image_path} alt={props.name} />
                <div className="pizzaInfo">
                    <p>{props.name}</p>
                    <p>{props.description}</p>
                    <a>{props.price}</a>
                </div>
                <div className="button">
                    <button onClick={handlePizzaAdd}>Add</button>
                </div>
            </section>
        ) : (
            <section className="pizzaCard">
                <img src={props.image_path} alt={props.name} />
                <div className="pizzaInfo">
                    <p>{props.name}</p>
                    <p>{props.description}</p>
                    <a>{props.price}</a>
                </div>
                <div className="button">
                    <button onClick={handlePizzaRemove}>Remove</button>
                </div>
            </section>
        )
    )
}

export default PizzaItem;
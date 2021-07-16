import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import {useHistory} from 'react-router-dom';
import './SelectPizza.css';


function SelectPizza () {
    const history = useHistory()
    const pizzas = useSelector(store => store.pizzas);
    console.log(pizzas);
    const handleClick= () => {
        console.log('Routing to info page');
        history.push('/info');
    }
    return(
        <>
            <section id='pizzaList'>
            {pizzas.map( pizza => {
                return <PizzaItem key={pizza.id} name={pizza.name} description={pizza.description} price={pizza.price} image_path={pizza.image_path} pizza={pizza} />
            })}
            </section>
            <button id='nextButton' onClick={handleClick}>Next</button>
        </>
    )
}

export default SelectPizza;
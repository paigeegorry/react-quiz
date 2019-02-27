REDUX:
1. Start with reducer
2. Create an action
3. Go to reducer, let it handle that action
4. Go to components, create display component (i.e. displaying list, doesn't know about redux)
5. Containers > (i.e. display all pizzas)
6. Selectors -> (i.e. getAllPizzas())
7. Add selector to container (App.js)

import React, { PureComponent } from 'react';
import store
import { cheesePizzas } from 'selectors'
import Pizzas from '../../components/pizzas/Pizzas'

export default class CheesePizza extends PureComponent {
  state = {
    pizzas: []
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({ pizzas: cheesePizzas(store.getState())})
    })
  }



  render() {
    return (
      <Pizzas pizzas={this.state.pizzas} />
    )
  }

}

addPizzaForm.js - functional component

addPizzaForm({ onSubmit, size, onChange }) {
  <form onSubmit={onSubmit}>
    <input type="number" value={size} onChange={onChange} />
    <button>Add Pizza</button>
  </form>
}

createCheesePizza -> container
class CreateCheesePizza extends PureComponent {
  state = {
    size: 14
  }

  updatePizzaSize = ({target}) => {
    store.dispatch(updateNewPizzaSize(target.value));
  }

  createPizza = (event) => {
    event.preventDefault();
    store.dispatch(createCheesePizza(store.getState()));
  }

  render() {
    return (
      <AddPizzaForm onSubmit={this.createPizza} onChange={this.updatePizzaSize} />
    )
  }
}

reducer -> pizza -> newPizzaSize: 14 to initialState


REDUX: 
// store.getState() - returns the entire state in the store
// store.dispatch() - triggers an action or event
// store.subscribe() - notifies us when state changes

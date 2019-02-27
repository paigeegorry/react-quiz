// Redux gives us a global obj where all state lives.
// This obj is called our store.

import { createStore } from 'redux';

const CREATE_CHEESE_PIZZA = 'CREATE_CHEESE_PIZZA';
const CREATE_PEPPERONI_PIZZA = 'CREATE_PEPPERONI_PIZZA';

const initialState = {
  cheese: [],
  pepperoni: []
};

function reducer(state =  initialState, action) {
  switch(action.type) {
    case CREATE_CHEESE_PIZZA:
      return {
        ...state, 
        cheese: [
          ...state.pizza, 
          { name: 'cheese', 
            ...action.payload 
          }] 
      };
    case CREATE_PEPPERONI_PIZZA:
      return { 
        ...state,
        pizza: [
          ...state.pizza, 
          { name: 'pepperoni',
            ...action.payload 
          }] 
      };
    default: 
      return state;
  }
}

const store = createStore(reducer);

const createCheesePizza = (size) => ({
  type: CREATE_CHEESE_PIZZA,
  payload: { size }
});

store.dispatch(createCheesePizza(10));

store.dispatch({
  type: CREATE_CHEESE_PIZZA,
  payload: { size: '18' }
});

const createPepperoniPizza = (size) => ({
  type: CREATE_PEPPERONI_PIZZA,
  payload: { size }
});

store.dispatch(createPepperoniPizza(14));

store.dispatch({
  type: CREATE_PEPPERONI_PIZZA,
  payload: { size: '14' }
});

console.log(store.getState());

const cheesePizzas = state => state.cheese;
const largeCheesePizzas = state => {
  return cheesePizzas(state).filter(pizza => pizza.size > 14);
};

const pepperoniPizzas = state => state.pepperoni;
const smallPepperonis = state => {
  return pepperoniPizzas(state).filter(pizza => pizza.size < 14);
};

console.log('cheese', cheesePizzas(store.getState()));
console.log('large cheese', largeCheesePizzas(store.getState()));

console.log('small pepperonis', smallPepperonis(store.getState()));


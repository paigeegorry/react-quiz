// selector = aggregate; where certain parts of state live in store
// container = stateful piece aware of redux
// component = passed props, triggers action that causes reducer to run

// 1. index.js
// import create store -> 
// first argument it takes is a reducer, takes state and action
import { createStore } from 'redux';

// @@INNIT calls reducer(undefined. { type: '@@INIT' })
const initialState = {
  dogs: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DOG':
      return { dogs: [...state.dogs, action.payload] };
    default:
      return state; // always has to return some state
  }
}

const store = createStore(reducer);

// STORE.GETSTATE() returns the current state in our store
console.log(store.getState()); // should see an array of dogs (i.e. what is in our initialState)

// STORE.DISPATCH triggers an action
store.dispatch({
  type: 'ADD_DOG',
  payload: 'rover'
});

// creating an action const - helps avoid typos and easy to change string
const ADD_DOG = 'ADD_DOG';

// creating a function and passing that to STORE.DISPATCH()
const addDog = name => ({
  type: ADD_DOG,
  payload: name
});

store.dispatch(addDog('rover'));
store.dispatch(addDog('spot'));
unsubscribe();
store.dispatch(addDog('pogo'));

// STORE.SUBSCRIBE() - listens for state changes and triggers a callback // triggers everytime store updates 
// should go beneath CREATESTORE(); - respond to state changes in some way
const unsubscribe = store.subscribe(() => {
  console.log('update', store.getState());
});
// subscribe returns a function that allows you to UNSUBSCRIBE from changes



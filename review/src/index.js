import { createStore } from 'redux';
import reducer from './reducers/notes';
import { createNote } from './actions/notes';
// import getNotes from './selectors/notes';

const store = createStore(
  reducer
);

store.subscribe(() => {
  console.log('update', store.getState());
});

store.dispatch(createNote('title', 'body'));

export default store;

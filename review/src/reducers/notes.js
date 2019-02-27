import { CREATE_NOTE } from '../actions/notes';

const initialState = {
  notes: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_NOTE:
      return { notes: [...state.notes, action.payload] };
    default: 
      return state;
  }
}

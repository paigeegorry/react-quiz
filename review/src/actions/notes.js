export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = (title, body) => ({
  type: CREATE_NOTE,
  payload: { title, body }
});

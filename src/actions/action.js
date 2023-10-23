export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime(),
      text
    }
  });
  
export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    payload: todo
  });
  
export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: id
  });
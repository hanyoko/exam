import './App.css';
import TodoLists from './components/TodoLists.js';
import Header from './components/Header.js';
import { createContext, useReducer } from 'react';

const initialState = {
  input: "",
  todos: [
    {id: 1, text: "할 일 1 ", isDone: false},
    {id: 2, text: "할 일 2 ", isDone: false},
  ],
  id : 3
}

function reducer(state, action){
  switch(action.type){
    case 'changeInput':
      return {
        ...state,
        input: action.payload
      };
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos,action.todo],
        id: state.id+1,
        input: ""
      };
    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(todo=> todo.id !== action.id)
      };
    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map(todo=>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone }
          : todo)
      }
    default:
      return state;
  }
}
export const UserDispatch = createContext(null);
function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { todos, input, id } = state;

  return (
    <UserDispatch.Provider value={dispatch}>
      <div className="App">
        <Header input={input} id={id} />
        <TodoLists todos={todos} />
      </div>
    </UserDispatch.Provider>
  );
}

export default App;

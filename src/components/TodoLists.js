import React, { useContext } from 'react';
import { UserDispatch } from '../App';
import { MdDone, MdDelete } from "react-icons/md";

const TodoLists = ({todos}) => {
    const dispatch = useContext(UserDispatch);
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ddd' : '#333'}}>
                    <MdDone></MdDone><span onClick={()=>{
                    dispatch({type: 'toggleTodo', id: todo.id})
                }}>{todo.text}</span>
                <button onClick={()=>{
                    dispatch({type: 'deleteTodo', id: todo.id})
                }}><MdDelete></MdDelete></button></li>)}
            </ul>
        </div>
    );
};

export default TodoLists;
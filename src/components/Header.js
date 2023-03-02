import React, { useContext } from 'react';
import { UserDispatch } from '../App';

const Header = ({input, id}) => {
    const dispatch = useContext(UserDispatch);

    const onChange = (e) => {
        dispatch({
            type: 'changeInput',
            payload: e.target.value
        })
    }
    const addTodo = () => {
        dispatch({
            type: 'addTodo',
            todo: {id: id, text: input, isDone: false}
        })
    }
    return (
        <div>
            <h2>to do list</h2>
            <div>
                <input value={input} onChange={onChange}/>
                <button onClick={addTodo}>+</button>
            </div>
        </div>
    );
};

export default Header;
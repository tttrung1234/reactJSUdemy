import React from 'react';
import PropTypes from 'prop-types';
import ChiTiet from './conponentsCon/index'
TodoList.propTypes = {
    todoList: PropTypes.array,
};
TodoList.defaultProps = {
    todoList: [],
};
function TodoList({todoList}) {
    
    return (
        <ul>
            {todoList.map(chitiet =>(
                <li key={chitiet.id}>
                    <ChiTiet chitiet={chitiet}/>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
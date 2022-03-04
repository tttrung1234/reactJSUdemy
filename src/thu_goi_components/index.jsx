import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/index'
 ThuComponents.propTypes = {
    
};

function ThuComponents(props) {
    const todoList = [
        { 
            id: 1,
            title: 'red'
        },
        { 
            id : 2,
            title : 'blue'
        },
        { 
            id : 3,
            title : 'green'
        },
    ]
    return (
        <div>
            <TodoList todoList = {todoList} />
        </div>
    );
}

export default ThuComponents;
import React from 'react';

import { CreatorContainer } from '../Creator/CreatorContainer';
import Filter from '../../components/Filter/Filter';
import List from '../../components/List/List';

const TodoList = ({ todoList, filterBy, removeTodo=f=>f, selectTodo=f=>f, performanceTodo=f=>f, filterTodo=f=>f }) =>
    <div className="app">
        <CreatorContainer />
        <Filter filterTodo={filterTodo} />
        { todoList.length >= 1 ?
            <List todoList={todoList} filterBy={filterBy} removeTodo={removeTodo} selectTodo={selectTodo} performanceTodo={performanceTodo} /> :
            <div className="container">
                <h4>У вас нет задач.</h4>
            </div> }
    </div>;

export default TodoList;

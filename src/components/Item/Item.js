import React from 'react';
import PropTypes from 'prop-types';

import { todoItemViewDateFormat } from "../../helpers/dateFormatConvert";

import "./item.css";

const Item = ({todoItem, num, removeTodo=f=>f, selectTodo=f=>f, performanceTodo=f=>f}) =>
    <div className="row todo-item">
        <div className="col-md-12">
            <div className="row">
                <div className="col-sm-4">
                    <p className="todo-item__number">№ {num}.</p>
                    <p className="todo-item__name">{todoItem.name}</p>
                </div>
                <div className="col-sm-4">
                    <p className="todo-item__status">Статус задачи: {todoItem.status}</p>
                </div>
                <div className="col-sm-3">
                    <p className="todo-item__date-performance">Дата выполнения: {todoItemViewDateFormat(todoItem.datePerformance)}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8">
                    <p className="todo-item__description">{todoItem.description}</p>
                </div>
                <div className="col-sm-4">
                    <p className="todo-item__importance">Важность: {todoItem.importance}</p>
                    <p className="todo-item__date-deadline">Выполнить до: {todoItemViewDateFormat(todoItem.dateDeadline)}</p>
                </div>
            </div>
            <button className="todo-item__remove" onClick={removeTodo}>Удалить</button>
            <button className="todo-item__edit" onClick={selectTodo}>Редактировать</button>
            <button className="todo-item__performance" onClick={performanceTodo}>Отметить</button>
        </div>
    </div>;

export default Item;

import { connect } from "react-redux";

import {
    removeTodo,
    selectTodo,
    performanceTodo,
    filterTodo} from "../../actions";

import TodoList from "./TodoList";

function mapStateToProps(state) {
    const { todoListReducer } = state;
    return {
        todoList: todoListReducer.todoList,
        filterBy: todoListReducer.filterBy,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeTodo(id) {
            dispatch(removeTodo(id))
        },
        selectTodo(id) {
            dispatch(selectTodo(id))
        },
        performanceTodo(id) {
            dispatch(performanceTodo(id))
        },
        filterTodo(filterValue) {
            dispatch(filterTodo(filterValue))
        }
    };
}

export const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

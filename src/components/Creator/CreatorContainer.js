import { connect } from "react-redux";
import {
    addTodo,
    updateTodo} from '../../actions';

import Creator from "./Creator"

function mapStateToProps(state) {
    const { todoListReducer } = state;
    return {
        todoList: todoListReducer.todoList,
        selectedTodo: todoListReducer.selectedTodo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo(todo) {
            dispatch(addTodo(todo))
        },
        updateTodo(todo) {
            dispatch(updateTodo(todo))
        }
    };
}

export const CreatorContainer = connect(mapStateToProps, mapDispatchToProps)(Creator);

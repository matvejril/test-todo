import C from '../../constants'

import { dataConvertToForm } from "../../helpers/dateFormatConvert";

import initialState from '../../data/initialState';

export const todoListReducer = (state = initialState, action) => {
    switch (action.type) {

        case C.ADD_TODO: {
            const todo = action.payload;
            const todoList = [...state.todoList, todo];
            return {
                ...state,
                todoList,
            };
        }

        case C.SELECT_TODO: {
            const selectedTodo = dataConvertToForm({ ...state.todoList.find((todo) => todo.id === action.payload) });
            return {
                ...state,
                selectedTodo
            };
        }

        case C.UPDATE_TODO: {
            const selectedTodo = null;
            const todoList = [...state.todoList];
            todoList.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.name = action.payload.name;
                    todo.description = action.payload.description;
                    todo.importance = action.payload.importance;
                    todo.dateDeadline = action.payload.dateDeadline;
                    todo.datePerformance = action.payload.datePerformance;
                    todo.status = action.payload.status;
                }
            });
            return {
                ...state,
                todoList,
                selectedTodo
            };
        }

        case C.REMOVE_TODO: {
            const todoList = {...state}.todoList.filter((todo) =>
                todo.id !== action.payload);
            return {
                ...state,
                todoList
            };
        }

        case C.PERFORMANCE_TODO: {
            const todoList = [...state.todoList].map((todo) => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                if (todo.status === "В процессе") {
                    todo.status = "Выполнено";
                    // Создаем новую дату выполнения задачи в формате - 1537614593431
                    todo.datePerformance = Date.now();
                    // Преобразуем дату к формату - 1537614593431 для сравнения
                    const dateDeadlineFormat = new Date(todo.dateDeadline);
                    if (todo.datePerformance < dateDeadlineFormat) {
                        todo.status = "Выполнено";
                    } else {
                        todo.status = "Выполнено c опозданием";
                    }
                } else {
                    todo.status = "В процессе";
                    todo.datePerformance = '-';
                }
                return todo;
            });
            return {
                ...state,
                todoList
            };
        }

        case C.FILTER_TODO: {
            const filterBy = action.payload;
            return {
                ...state,
                filterBy
            };
        }

        default: {
            return state
        }
    }
};

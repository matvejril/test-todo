import C from '../constants/';

export const addTodo = (todo) => {
    return {
        type: C.ADD_TODO,
        payload: todo
    }
};

export const selectTodo = (id) => {
    return {
        type: C.SELECT_TODO,
        payload: id
    }
};

export const updateTodo = (todo) => {
    return {
        type: C.UPDATE_TODO,
        payload: todo
    }
};

export const removeTodo = (id) => {
    return {
        type: C.REMOVE_TODO,
        payload: id
    }
};


export const performanceTodo = (id) => {
    return {
        type: C.PERFORMANCE_TODO,
        payload: id
    }
};

export const filterTodo = (filterValue) => {
    return {
        type: C.FILTER_TODO,
        payload: filterValue
    }
};

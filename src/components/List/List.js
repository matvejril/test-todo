import React from 'react';

import Item from '../Item/Item';

const List = ({todoList, filterBy, removeTodo=f=>f, selectTodo=f=>f, performanceTodo=f=>f}) =>
    <div className="todo-list">
        <div className="container">
            {
                todoList.map((todoItem, index) => {
                    if (filterBy !== "Все") {
                        if (todoItem.importance === filterBy) {
                            return (
                                <Item todoItem={todoItem}
                                      num={index + 1}
                                      key={index}
                                      removeTodo={()=>removeTodo(todoItem.id)}
                                      selectTodo={()=>selectTodo(todoItem.id)}
                                      performanceTodo={()=>performanceTodo(todoItem.id)}/>
                            )
                        }
                    } else {
                        return (
                            <Item todoItem={todoItem}
                                  num={index + 1}
                                  key={index}
                                  removeTodo={()=>removeTodo(todoItem.id)}
                                  selectTodo={()=>selectTodo(todoItem.id)}
                                  performanceTodo={()=>performanceTodo(todoItem.id)}/>
                        )
                    }
            })}
        </div>
    </div>;

export default List;

import React from 'react';

import "./filter.css";

const Filter = ({filterTodo=f=>f}) =>
    <div className="filter">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <label>Выбрать задачи:
                        <select className="filter__select-importance"
                                onChange={(e)=> filterTodo(e.target.value)}>
                            <option value="Все">Все</option>
                            <option value="Обычная">Обычная</option>
                            <option value="Высокая">Высокая</option>
                            <option value="Наивысшая">Наивысшая</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    </div>;

export default Filter;

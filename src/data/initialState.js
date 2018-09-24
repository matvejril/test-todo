const initialState = {
    todoList: [
        {
            id: "sdf5e1p5-3abl-0p523-30e4-8001l8yf303s",
            name: "Задача 1",
            description: "Описание задачи 1",
            importance: "Обычная",
            dateDeadline: "Sat Sep 27 2018 17:37:04 GMT+0700 (PST)",
            datePerformance: "-",
            status: "В процессе"
        },
        {
            id: "5g1se1p5-3abl-aw523-30e4-8001l8yf30fs",
            name: "Задача 2",
            description: "Описание задачи 2",
            importance: "Высокая",
            dateDeadline: "Sat Sep 20 2018 17:37:04 GMT+0700",
            datePerformance: "Sat Sep 19 2018 17:37:04 GMT+0700",
            status: "Выполнено"
        },
        {
            id: "1215e1p5-3abl-0p523-30e4-8001l8yf30as",
            name: "Задача 3",
            description: "Описание задачи 3",
            importance: "Обычная",
            dateDeadline: "Sat Sep 19 2018 17:37:04 GMT+0700 (PST)",
            datePerformance: "-",
            status: "В процессе"
        },
        {
            id: "3315e1p5-3abl-0pa23-30e4-800as8yf3036",
            name: "Задача 4",
            description: "Описание задачи 4",
            importance: "Наивысшая",
            dateDeadline: "Sat Sep 22 2018 17:37:04 GMT+0700 (PST)",
            datePerformance: "Sat Sep 24 2018 17:37:04 GMT+0700 (PST)",
            status: "Выполнено c опозданием"
        },
    ],
    selectedTodo: null,
    filterBy: "Все",
};

export default initialState;

// Конвертировать дату в компоненте Item
// (Sat Sep 27 2018 17:37:04 GMT+0700 (PST) ---> 27.09.18
export function todoItemViewDateFormat(d) {
    let options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
    };
    if (d ==='-' || d === '') {
        return '-'
    } else {
        return(new Date(d).toLocaleString("ru", options));
    }
}

// Крнверитровать дату в формат формы
export function dataConvertToForm (todo) {
    if (todo.dateDeadline !== '-') {
        todo.dateDeadline = new Date(todo.dateDeadline).toISOString().substr(0, 10);
    } else {
        todo.dateDeadline = "";
    }
    return todo
}

class Todo {
    constructor() {
        this.todos = [];
    }

    addTodo(title) {
        this.todos.push({ id: this.todos.length + 1, title, isDone: false });
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(id, newTitle) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.title = newTitle || todo.title;
        }
    }

    markAsDone(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) todo.isDone = true;
    }

    getTotalTodos() {
        return this.todos.length;
    }

    getPendingTodos() {
        return this.todos.filter(todo => !todo.isDone).length;
    }

    getAllTodos() {
        return this.todos;
    }
}

let myTodoList = new Todo();
myTodoList.addTodo("Випити каву");
myTodoList.addTodo("Виконати дз");
console.log(myTodoList.getAllTodos());
myTodoList.markAsDone(1);
console.log(myTodoList.getAllTodos());
console.log(`Всього нотаток: ${myTodoList.getTotalTodos()}`);
console.log(`Невиконаних нотаток: ${myTodoList.getPendingTodos()}`);




/*
class Todo {
    constructor() {
        this.todos = [];
    }

    addTodo(title) {
        this.todos.push({ id: this.todos.length + 1, title, isDone: false });
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(id, newTitle) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.title = newTitle || todo.title;
        }
    }

    markAsDone(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) todo.isDone = true;
    }

    getTotalTodos() {
        return this.todos.length;
    }

    getPendingTodos() {
        return this.todos.filter(todo => !todo.isDone).length;
    }

    getAllTodos() {
        return this.todos;
    }

    findTodoByTitle(title) {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()));
    }

    sortTodosByStatus() {
        return this.todos.sort((a, b) => a.isDone - b.isDone);
    }

    sortTodosByStatusReverse() {
        return this.todos.sort((a, b) => b.isDone - a.isDone);
    }
}

let myTodoList = new Todo();
myTodoList.addTodo("Випити каву");
myTodoList.addTodo("Виконати дз");
console.log(myTodoList.getAllTodos());
myTodoList.markAsDone(1);
console.log(myTodoList.getAllTodos());
console.log(`Всього нотаток: ${myTodoList.getTotalTodos()}`);
console.log(`Невиконаних нотаток: ${myTodoList.getPendingTodos()}`);
console.log(myTodoList.findTodoByTitle("дз"));
console.log(myTodoList.sortTodosByStatus());
console.log(myTodoList.sortTodosByStatusReverse());
*/




/*
class Todo {
    constructor() {
        this.todos = [];
    }

    addTodo(title) {
        let date = new Date();
        this.todos.push({ 
            id: this.todos.length + 1, 
            title, 
            isDone: false, 
            dates: [date, date] 
        });
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    editTodo(id, newTitle) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.title = newTitle || todo.title;
            todo.dates[1] = new Date(); 
        }
    }

    markAsDone(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.isDone = true;
            todo.dates[1] = new Date(); 
        }
    }

    getTotalTodos() {
        return this.todos.length;
    }

    getPendingTodos() {
        return this.todos.filter(todo => !todo.isDone).length;
    }

    getAllTodos() {
        return this.todos;
    }

    findTodoByTitle(title) {
        return this.todos.filter(todo => todo.title.toLowerCase().includes(title.toLowerCase()));
    }

    sortTodosByStatus() {
        return this.todos.sort((a, b) => a.isDone - b.isDone);
    }

    sortTodosByStatusReverse() {
        return this.todos.sort((a, b) => b.isDone - a.isDone);
    }

    sortTodosByCreatedAt() {
        return this.todos.sort((a, b) => new Date(a.dates[0]) - new Date(b.dates[0]));
    }

    sortTodosByUpdatedAt() {
        return this.todos.sort((a, b) => new Date(a.dates[1]) - new Date(b.dates[1]));
    }
}


let myTodoList = new Todo();
myTodoList.addTodo("Купити продукти");
myTodoList.addTodo("Зробити домашнє завдання");
console.log(myTodoList.getAllTodos());
myTodoList.markAsDone(1);
console.log(myTodoList.getAllTodos());
console.log(`Всього нотаток: ${myTodoList.getTotalTodos()}`);
console.log(`Невиконаних нотаток: ${myTodoList.getPendingTodos()}`);
console.log(myTodoList.findTodoByTitle("продукти"));
console.log(myTodoList.sortTodosByStatus());
console.log(myTodoList.sortTodosByStatusReverse());
console.log(myTodoList.sortTodosByCreatedAt());
console.log(myTodoList.sortTodosByUpdatedAt());
*/
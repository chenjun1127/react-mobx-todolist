import {
    observable,
    computed,
    action
} from 'mobx';

class Todo {
    @observable title;
    @observable completed = false;
    @observable id = createRandomId();

    constructor(title) {
        this.title = title;
    }
}

class TodoList {
    @observable todos = [];
    @observable todosCompleted = [];
    @observable todosActive = [];
    @observable todosType = 'All';

    @computed get uncompletedTodoCount() {
        return this.todos.filter(todo => !todo.completed).length;
    }

    @action
    addTodo = (title) => {
        if (!title) return;
        this.todos.push(new Todo(title));
    }

    @action
    removeTodo = (id, type) => {
        if (!id || !type) return;
        if (type === 'Active') {
            this.todosActive = this.todosActive.filter(todo => todo.id !== id);
        } else if (type === 'Completed') {
            this.todosCompleted = this.todosCompleted.filter(todo => todo.id !== id);
        } else {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
        this.todos = this.todos.filter(todo => todo.id !== id);

    }

    @action
    filterTodos = (type) => {
        if (!type) return;
        if (type === 'Active') {
            this.todosActive = this.todos.filter(todo => !todo.completed);
        } else if (type === 'Completed') {
            this.todosCompleted = this.todos.filter(todo => todo.completed);
        }
        this.todosType = type;

    }


}

const store = new TodoList();
export default store;

// 生成随机不重复ID
function createRandomId() {
    return (Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5);
}
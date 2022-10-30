import { Observable } from "../observable/observable"

export interface Todo {
    readonly id: number
    readonly text: string
    readonly completed: boolean
}

export enum VisibilityFilter {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
}

class TodoService {
    readonly todos = new Observable<Todo[]>([
        {id: 1, text: 'Сделать стейт на observable', completed: true},
        {id: 2, text: 'Сделать TodoItem', completed: true},
        {id: 3, text: 'Сделать TodoFilter', completed: true},
        {id: 4, text: 'Реализование добавление TodoItem', completed: true},
        {id: 5, text: 'Добавить стилизацию', completed: true},
        {id: 6, text: 'Сделать фильтрацию задач', completed: true},
        {id: 7, text: 'Сделать вывод незавершённых задач', completed: true},
        {id: 8, text: 'Устроить личную жизнь', completed: false},
        {id: 9, text: 'Найти работу', completed: false},
        {id: 10, text: 'Закончить проект todosList', completed: false},
    ])
    readonly visibilityFilter = new Observable(VisibilityFilter.SHOW_ALL)

    addTodo(text: string) {
        this.todos.set([...this.todos.get(), {id: Date.now(), text, completed: false }])
    }

    toggleTodo(toggledId: number) {
        this.todos.set(this.todos.get().map(
            (todo) => {
                return (todo.id === toggledId ? {id: todo.id, text: todo.text, completed: !todo.completed} : todo)
            }
        ))
    }

    deleteCompletedTodos() {
        this.todos.set(this.todos.get().filter(todo => !todo.completed))
    }

    setVisibilityFilter(filter: VisibilityFilter) {
        this.visibilityFilter.set(filter)
    }
}

export default new TodoService()
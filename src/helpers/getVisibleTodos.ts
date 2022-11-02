import { Todo, VisibilityFilter } from "../services/TodoService"

export function getVisibleTodos(todos: Todo[], filter: VisibilityFilter): Todo[] {
    switch (filter) {
        case VisibilityFilter.SHOW_ALL:
            return todos
        case VisibilityFilter.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilter.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
    }
}
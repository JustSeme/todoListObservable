import TodoService, { VisibilityFilter } from "./TodoService"

let SUT: typeof TodoService

beforeEach(() => {
    SUT = TodoService
})

test('TodoService is created', () => {
    expect(SUT).not.toBeUndefined()
    expect(SUT.todos).not.toBeNull()
    expect(SUT.visibilityFilter.get()).toBe(VisibilityFilter.SHOW_ALL)
})

test('Todo should be added and todo.completed should be toggled', () => {
    const todosLengthAfter = SUT.todos.get().length 
    SUT.addTodo('Hello World')
    const todosLengthBefore = SUT.todos.get().length
    const addedTodo = SUT.todos.get()[todosLengthBefore - 1]
    expect(addedTodo.text).toBe('Hello World')
    expect(todosLengthAfter === todosLengthBefore).toBeFalsy()

    SUT.toggleTodo(addedTodo.id)
    expect(SUT.todos.get()[todosLengthBefore - 1].completed).toBeTruthy()
})

test('Completed todos should be deleted', () => {
    SUT.deleteCompletedTodos()

    const completedTodos = SUT.todos.get().filter(todo => todo.completed)
    expect(completedTodos.length).toBe(0)
})

test('VisibilityFilter should be VisibilityFilter.SHOW_COMPLETED', () => {
    SUT.setVisibilityFilter(VisibilityFilter.SHOW_COMPLETED)

    expect(SUT.visibilityFilter.get()).toBe(VisibilityFilter.SHOW_COMPLETED)
})
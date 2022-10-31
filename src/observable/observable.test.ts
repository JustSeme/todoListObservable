import { Observable } from './observable'
import { Todo } from '../services/TodoService'

let _val: Todo[]
let SUT: Observable<Todo[]>

type Listenner<T> = (val: T) => void

beforeEach(() => {
    _val = [
        {id: 1, text: 'Сделать стейт на observable', completed: true},
        {id: 2, text: 'Сделать TodoItem', completed: true},
        {id: 3, text: 'Сделать TodoFilter', completed: true},
    ]
    SUT = new Observable(_val)
})

test('Observable is created', () => {
    expect(SUT.get().length).toBeTruthy()
})

test('Observable return value', () => {
    const value = SUT.get()
    expect(value.length).toBe(_val.length)
})

test('Observable set value', () => {
    SUT.set([
        {id: 1, text: 'Hello World', completed: true},
    ])
    expect(SUT.get()[0].text).toBe('Hello World')
})

test('Subscribe should be completed without crashing', () => {
    const listenner: Listenner<Todo[]> = (value) => void
    SUT.subscribe(listenner)
})
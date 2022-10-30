import { useState } from 'react';
import { useObservable } from '../hooks/useObservable';
import TodoService, { Todo, VisibilityFilter } from '../services/TodoService';
import FilterLink from './FilterLink/FilterLink';
import TodoItem from './TodoItem/TodoItem';
import { Button, List, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

const TodoList = () => {
    const todos = useObservable(TodoService.todos)
    const filter = useObservable(TodoService.visibilityFilter)
    const visibleTodos = getVisibleTodos(todos, filter)

    const [newTodoText, setNewTodoText] = useState('')
    const [inputError, setInputError] = useState(false)

    const onTodoAdded = () => {
        if(!newTodoText) {
            setInputError(true)
        } else {
            TodoService.addTodo(newTodoText)
            setNewTodoText('')
            setInputError(false)
        }   
    }

    const notCompletedTodos = getVisibleTodos(todos, VisibilityFilter.SHOW_ACTIVE).length

    return (
        <div>
            <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                <TextField
                    id='new-todo-text'
                    value={newTodoText} 
                    onChange={e => setNewTodoText(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.keyCode === 13) onTodoAdded()
                    }}
                    label="What need to be done?"
                    variant='outlined'
                    error={inputError}
                />
                <Button sx={{'marginLeft': '10px'}} variant='outlined' onClick={onTodoAdded}>Добавить</Button>
                <Button sx={{'marginLeft': '10px'}} variant='contained' onClick={() => TodoService.deleteCompletedTodos()}>Удалить завершённые</Button>
            </div>
            <List>
                {visibleTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
            </List>
            <div style={{'textAlign': 'center'}}>
                <span>
                    <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
                    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
                    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Completed</FilterLink>
                </span>
            </div>
            <div style={{'textAlign': 'center'}}>
                <Typography variant='h6'>
                    {notCompletedTodos > 0 ? `${notCompletedTodos} ${declOfNum(notCompletedTodos, ['задача', 'задачи', 'задач'])} остаются невыполненными` : 'Все задачи выполнены! Ты молодец :)'}
                </Typography>
            </div>
        </div>
    );

    function getVisibleTodos(todos: Todo[], filter: VisibilityFilter): Todo[] {
        switch (filter) {
            case VisibilityFilter.SHOW_ALL:
                return todos
            case VisibilityFilter.SHOW_COMPLETED:
                return todos.filter(t => t.completed)
            case VisibilityFilter.SHOW_ACTIVE:
                return todos.filter(t => !t.completed)
        }
    }

    function declOfNum(n: number, text_forms: string[]) {  
        n = Math.abs(n) % 100; 
        var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 === 1) { return text_forms[0]; }
        return text_forms[2];
    }
};

export default TodoList
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import TodoService from '../../services/TodoService';

const TopPanel = () => {

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

    return (
        <div style={{'display': 'flex', 'justifyContent': 'center'}}>
                <TextField
                    id='new-todo-text'
                    value={newTodoText} 
                    onChange={e => setNewTodoText(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.keyCode === 13) onTodoAdded()
                    }}
                    label="Новая задача..."
                    variant='outlined'
                    error={inputError}
                />
                <Button sx={{'marginLeft': '10px'}} variant='outlined' onClick={onTodoAdded}>Добавить</Button>
                <Button sx={{'marginLeft': '10px'}} variant='contained' onClick={() => TodoService.deleteCompletedTodos()}>Удалить завершённые</Button>
            </div>
    );
};

export default TopPanel;
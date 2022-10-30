import TodoService, { Todo } from '../../services/TodoService';
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const TodoItem = ({todo: {id, text, completed}}: {todo: Todo}) => {
    return (
        <ListItem
            key={id}
            onClick={() => TodoService.toggleTodo(id)}
            secondaryAction={
                <IconButton edge="end" aria-label="todos">
                    {completed ? <PlaylistAddCheckIcon fontSize='large'/> : <ListIcon fontSize='large'/>}
                </IconButton>
                }
            disablePadding
        >
            <ListItemButton>
                <ListItemIcon>
                    <Checkbox
                        edge='start'
                        checked={completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': text }}
                    />
                    <ListItemText 
                        id={text} 
                        primary={text} 
                        sx={{'margin': 'auto 0'}}
                    />
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
    );
};

export default TodoItem;
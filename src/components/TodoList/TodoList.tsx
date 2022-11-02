import TodoItem from '../TodoItem/TodoItem';
import { List } from '@mui/material';
import { getVisibleTodos } from '../../helpers/getVisibleTodos';
import TodoService from '../../services/TodoService';
import { useObservable } from '../../hooks/useObservable';

const TodoList: React.FC = () => {
    const filter = useObservable(TodoService.visibilityFilter)
    const todos = useObservable(TodoService.todos)
    const visibleTodos = getVisibleTodos(todos, filter)

    return (
        <List>
            {visibleTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </List>
    );
};

export default TodoList;
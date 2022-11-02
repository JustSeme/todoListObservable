import TodoService, { VisibilityFilter } from '../../services/TodoService';
import FilterLink from '../FilterLink/FilterLink';
import Typography from '@mui/material/Typography';
import { useObservable } from '../../hooks/useObservable';
import { declOfNum } from '../../helpers/declOfNum';
import { getVisibleTodos } from '../../helpers/getVisibleTodos';

const BottomPanel = () => {
    const todos = useObservable(TodoService.todos)

    const notCompletedTodos = getVisibleTodos(todos, VisibilityFilter.SHOW_ACTIVE).length

    return (
        <div>
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
};

export default BottomPanel;
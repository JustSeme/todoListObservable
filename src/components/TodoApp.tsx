import TopPanel from './TopPanel/TopPanel';
import TodoList from './TodoList/TodoList';
import BottomPanel from './BottomPanel/BottomPanel';

const TodoApp = () => {

    return (
        <div>
            <TopPanel />
            <TodoList />
            <BottomPanel />
        </div>
    );
};

export default TodoApp
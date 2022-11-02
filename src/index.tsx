import ReactDOM from 'react-dom/client'
import TodoList from './components/TodoApp';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <TodoList />
)
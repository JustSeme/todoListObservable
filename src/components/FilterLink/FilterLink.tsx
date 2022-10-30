import { Button } from '@mui/material';
import React from 'react';
import { useObservable } from '../../hooks/useObservable';
import TodoService, { VisibilityFilter } from '../../services/TodoService';

const FilterLink = ({filter, children}: {filter: VisibilityFilter, children: React.ReactNode}) => {
    const activeFilter = useObservable(TodoService.visibilityFilter)
    const active = filter === activeFilter

    const onLinkClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        TodoService.setVisibilityFilter(filter)
    }

    return (
        <Button disabled={active} onClick={e => onLinkClick(e)}>
            {children}
        </Button>
    )
};

export default FilterLink;
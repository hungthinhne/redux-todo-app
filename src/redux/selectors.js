import { createSelector } from "reselect";

export const todoListSelector = (state, status, priority) => {
    const todoRemaining = state.todoList.filter((todo) => {
        
        console.log(state);

        if (state.filters.status === 'All') {
            return state.filters.priority.length ? todo.name.includes(state.filters.search) && state.filters.priority.includes(todo.priority) : todo.name.includes(state.filters.search) 
        }

        return todo.name.includes(state.filters.search)
         && (state.filters.status ==='Completed' 
            ? todo.completed.includes(true)
            : todo.completed.includes(false) )
            
    });
    return todoRemaining;
};

export const searchTextSelector = (state) => state.filters.search; 

export const filterStautusSelector = (state) => state.filters.status;

export const filtersPrioritySelector = (state) => state.filters.priority;
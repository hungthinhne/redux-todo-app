const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        {
            id: 1,
            name: 'Test',
            completed: 'false',
            priority: 'Medium',
        },
        {
            id: 2,
            name: 'Test 2',
            completed: 'true',
            priority: 'High',
        },
        {
            id: 3,
            name: 'Test 3',
            completed: 'false',
            priority: 'High',
        }
    ]

}

const rootReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'todoList/addTodo' :
            return {
                ...state, 
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filters/searchFiltersChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload
                }
            }

        case 'filters/statusFilterChange' :
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }

        case 'filters/priorityFilterChange' : 
        return {
            ...state,
            filters: {
                ...state.filters,
                priority: action.payload
            }
        }
        
            default: 
            return state;
    }
}

export default rootReducer;
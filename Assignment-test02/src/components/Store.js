import { createStore } from 'redux';

// Define initial state
const initialState = {
    tasks: [],
};

// Define reducer function
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.payload),
            };
        case 'UPDATE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task, index) =>
                    index === action.payload.index ? action.payload.editedTask : task
                ),
            };
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;
import { TEST_TYPE } from '../actions/types';

const initialState = {
    name: "State"
}

export const testReducer = (state = initialState, action) => {
    switch( action.type ) {
        case TEST_TYPE: 
            return {
                ...state,
                name: action.payload
            }
        default: 
            return state
    }
}
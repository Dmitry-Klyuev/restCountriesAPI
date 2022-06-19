import {CLEAR_FILTER, SET_REGION, SET_SEARCH} from "./controls-actions";

const initialState = {
    search: '',
    region: '',
}

export const controlsReducer = (state= initialState, action) => {
    switch (action.type){
        case SET_SEARCH : {
            return {...state,
            search: action.payload,
            }
        }
        case SET_REGION:{
            return {...state,
            region: action.payload,
            }
        }
        case CLEAR_FILTER: {
            return initialState;
        }

        default : {
            return state;
        }
    }
}
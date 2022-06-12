import {SET_COUNTRIES, SET_ERROR, SET_LADING} from "./countries-actions";

const initialState = {
    status: 'idle', //loading | received | rejected
    error: null,
    list: [],
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LADING: {
            return {
                ...state,
                status: 'loading',
                error: null,
            };
        }
        case SET_COUNTRIES: {
            return {
                ...state,
                status: 'received',
                list: action.payload,
            };
        }
        case SET_ERROR: {
            return {
                ...state,
                status: 'received',
                error: action.payload,
            };
        }
        default:
            return state;
    }
};
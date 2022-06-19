import {SET_COUNTRY, SET_ERROR, SET_LOADING} from "./details-actions";

const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
};

export const detailsReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_COUNTRY:
                return {
                    ...state,
                    status: 'received',
                    currentCountry: action.payload,
                };
            case SET_ERROR:
                return {
                    ...state,
                    status: 'rejected',
                    error: action.payload,
                };
            case SET_LOADING:
                return {
                    ...state,
                    error: null,
                    status: 'loading',
                };
            default:
                return state;
        }
    }
;
import {ALL_COUNTRIES} from "../../config";

export const SET_COUNTRIES = '@@countries/SET_COUNTRIES';
export const SET_LADING = '@@countries/SET_LOADING';
export const SET_ERROR = '@@countries/SET_ERROR';

export const setCounties = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
});

export const setLoading = () => ({
    type: SET_LADING,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

//thunk
export const loadCountries = () => (dispatch, getState, {client, api}) => {
    dispatch(setLoading());
    client.get(api.ALL_COUNTRIES)
        .then((data) => dispatch(setCounties(data)))
        .catch((error) => dispatch(setError(error.message)));
};
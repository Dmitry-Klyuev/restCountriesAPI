import {searchByCountry} from "../../config";

export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';

export const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country,
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
})

const setLoading = () => ({
    type: SET_LOADING,
})

//thunk
export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading());
    client.get(api.searchByCountry(name))
        .then(({data})=>{
            dispatch(setCountry(data[0]))
        })
        .catch((error)=>{
            dispatch(setError(error.message))
        })
}


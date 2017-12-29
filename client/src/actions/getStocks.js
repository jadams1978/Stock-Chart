import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const getStockSuccess = data => ({
    type: 'GET_STOCK_SUCCESS',
    data
});

export const FETCH_PROTECTED_DATA_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchProtectedDataError = error => ({
    type: FETCH_PROTECTED_DATA_ERROR,
    error
});

export const getStocks = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/add`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => {
            dispatch(getStockSuccess(data))
            console.log(data)
        })
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

import {
    FETCH_QUANDYL_SUCCESS
} from '../actions/addNew';

const initialState = {
    data: '',
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUANDYL_SUCCESS) {
        console.log(action.data);
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } 
    return state;
}

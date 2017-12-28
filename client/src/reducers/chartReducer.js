import {
    FETCH_QUANDYL_SUCCESS,
    FETCH_QUANDYL
} from '../actions/addNew';

const initialState = {
    data: '',
    error: null,
    name: 'noname'
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUANDYL_SUCCESS) {
        console.log(action);
        return Object.assign({}, state, {
            data: action.data,
            name: action.name,
            error: null
        });
        /*} else if (action.type === FETCH_QUANDYL) {
            return Object.assign({}, state, {
                data: action.closingObj,
                error: null
                

            });*/
        }
        return state;
    } 
    


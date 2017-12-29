import {
    FETCH_QUANDYL_SUCCESS,
    FETCH_QUANDYL
} from '../actions/addNew';

const initialState = {
    data: '',
    error: null,
    name: 'noname',
    stocks: []
};



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_STOCK_SUCCESS':
            console.log(action)
            return {
                ...state,
                stocks: action.data
            }
        case FETCH_QUANDYL_SUCCESS:
            return {
                ...state,
                data: action.data,
                name: action.name,
                error: null
            }

        default:
            return state
    }

}
/*export default function reducer(state = initialState, action) {
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
                

       
    }*/ 
    


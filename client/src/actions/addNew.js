import axios from 'axios';
// import * as io from 'socket.io-client'; 
// var socket = io('http://localhost:3000'); 
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


export const FETCH_QUANDYL_SUCCESS = 'FETCH_QUANDYL_SUCCESS';

export const fetchQuandylSuccess = data => ({
    type: FETCH_QUANDYL_SUCCESS,
    data
});

export const sendEntry = (entry) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);
    console.log(entry);
    return fetch(`${API_BASE_URL}/add`, {
        method: 'POST',
        body: JSON.stringify(entry),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
//         // socket.emit('add entry', entries);

      })
}

export const fetchQuandyl = (stock) => (dispatch, getState) => {
    console.log(stock);
    let year = 2017;
    let month = 'december';
    let stock = 'GOOG';
    var url = "https://www.quandl.com/api/v3/datasets/WIKI/" + stock + ".json?api_key=scg9nFzbjxfysc6spmY3&start_date=" + year + "-" + month + "-01&end_date=" + year + "-" + month + "-28"
    
    
    return fetch(url, {
        method: 'GET',
        
        headers: {
            // Provide our auth token as credentials
            
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        console.log(response);
        if (response.ok) {
            response.json().then(json => {
              console.log(json);
              json = [
                {day: 'Monday', amt: 4000},
                {day: 'Tuesday', amt: 3000},
                {day: 'Wednesday', amt: 2000},
                {day: 'Thursday', amt: 2780},
                {day: 'Friday', amt: 1890},
                {day: 'Saturday', amt: 2390},
                {day: 'Sunday', amt: 3490},
          ];
              dispatch(fetchQuandylSuccess(json))
            });
          }
//         // socket.emit('add entry', entries);

      })
    //.then(res => normalizeResponseErrors(res))
    /*.then(res => res.json())
    .then(({res}) => {
        dispatch(fetchQuandylSuccess(res))
        console.log(res);
    })
    .catch(err => {
        console.log(err);
        //dispatch(fetchProtectedDataError(err));
    });*/
}
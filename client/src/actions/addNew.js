import axios from 'axios';
// import * as io from 'socket.io-client'; 
// var socket = io('http://localhost:3000'); 
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';



export const FETCH_QUANDYL_SUCCESS = 'FETCH_QUANDYL_SUCCESS';
export const fetchQuandylSuccess = (data, name) => ({
    type: FETCH_QUANDYL_SUCCESS,
    data,
    name
});

export const fetchQ = (stock) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    console.log(authToken);
    console.log(stock);
    return fetch(`${API_BASE_URL}/add`, {
        method: 'POST',
        body: JSON.stringify(stock),
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    })
    .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => {
            //dispatch(fetchProtectedDataSuccess(data))
            console.log(data)
        })
        .catch(err => {
            //dispatch(fetchProtectedDataError(err));
        });
}
export const fetchQuandyl = (data) => (dispatch, getState) => {
    
    console.log(data);
    let year = 2017;
    let month = 'december';
    let stock; 
    if (data) {
        stock = data.stock;
    } else {
        stock = 'SBUX';
    }
    console.log(data)
    let url = "https://www.quandl.com/api/v3/datasets/WIKI/" + stock + ".json?api_key=scg9nFzbjxfysc6spmY3&start_date=" + year + "-" + month + "-01&end_date=" + year + "-" + month + "-28"
    console.log(url)
    
    return fetch(url, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        console.log(response)
        if (response.ok) {
            response.json().then(json => {
              let stockData = json.dataset.data;
              let closingArr = [];
              console.log(json)
              stockData.map(function(json) {
                  closingArr.push({date: json[0], close: json[4]});
              })
              dispatch(fetchQuandylSuccess(closingArr, json.dataset.name))
            })
          
//         // socket.emit('add entry', entries);

      
    
    .catch(err => {
        console.log(err);
        //dispatch(fetchProtectedDataError(err));
    });
}})}
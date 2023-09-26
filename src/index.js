import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore} from 'redux'; 
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers } from 'redux';
import { put, takeEvery } from 'redux-saga/effects';

import axios from 'axios';

//redux-saga 
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware(); 





function* watcherSaga() {
    yield takeEvery('SEND_QUESTIONONE_INPUT_TO_SERVER', SEND_QUESTIONONE_INPUT); 
    yield takeEvery('FETCH_FEEDBACK_ITEMS', fetchFeedback )

}


const feedbackArray = [];
//Reducer 
const feedbackItems = (state = feedbackArray, action) => {
    switch (action.type) {
        case 'ADD_FEEDBACK': 
        return [...state, action.payload]; 
        default: 
        return state; 
    }
}; 

function* fetchFeedback() {
    try{
        const response = axios.get('/'); 
        const action = { type: 'SET_FEEDBACK', payload: response.data}; 
        yield put(action) 
    } catch (error) {
        alert('something went wrong'); 
        console.log(`Error in fetchFeedback ${error}`); 
        throw error
    }
}; 


function* SEND_QUESTIONONE_INPUT(action) {
    try{
        yield axios.post('/feedbackInput', action.payload);
        yield put({ type: 'FETCH_FEEDBACK_ITEMS'}); 
    } catch (error) {
        alert('something went wrong'); 
        console.log(`Error in addFeedback: ${error}`);
        throw error
    }
}

function* rootSaga() {
    yield watcherSaga(); 
}; 




const store = createStore(
    combineReducers({
        feedbackItems
    }), 
    applyMiddleware(sagaMiddleware, logger), 
); 
sagaMiddleware.run(rootSaga); 
sagaMiddleware.run(watcherSaga); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}> 
        <App />
        </Provider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore} from 'redux'; 
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers } from 'redux';
// import { put, takeEvery } from 'redux-saga/effects';

// import axios from 'axios';

//redux-saga 
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware(); 

//   function* watcherSaga() {

//   };

//reducers

const feedbackItemOne = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ANSWER_ONE':
        return [action.payload]
      default:
        return state;
    }
  };

  const feedbackItemTwo = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ANSWER_TWO':
        return [action.payload]
      default:
        return state;
    }
  };

  const feedbackItemThree = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ANSWER_THREE':
        return [action.payload]
      default:
        return state;
    }
  };

  const feedbackItemFour= (state = [], action) => {
    switch (action.type) {
      case 'ADD_ANSWER_FOUR':
        return [action.payload]
      default:
        return state;
    }
  };

  //Old reducer that does not delete previous response off the review page. 
//   const feedbackItemFour= (state = [], action) => {
//     switch (action.type) {
//       case 'ADD_ANSWER_FOUR':
//         return [...state, action.payload];
//       default:
//         return state;
//     }
//   };



  //SAGAS


// function* rootSaga() {
//     yield watcherSaga(); 
// }; 




const store = createStore(
    combineReducers({
        feedbackItemOne, 
        feedbackItemTwo, 
        feedbackItemThree, 
        feedbackItemFour
    }), 
    applyMiddleware(sagaMiddleware, logger), 
); 
// sagaMiddleware.run(rootSaga); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}> 
        <App />
        </Provider>
    </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers } from 'redux';
import { takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';



const sagaMiddleware = createSagaMiddleware();

function* watcherSaga() {
  yield takeEvery('SUBMIT_FEEDBACK', submitFeedback);
};


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

const feedbackItemFour = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ANSWER_FOUR':
      return [action.payload]
    default:
      return state;
  }
};



//SAGAS
function* submitFeedback() {
  try {

    const state = yield select(state => state);
    console.log('State was received:', state);

    const feedback = {
      feeling: state.feedbackItemOne[0],
      understanding: state.feedbackItemTwo[0],
      support: state.feedbackItemThree[0],
      comments: state.feedbackItemFour[0] || 'Not Answered'
    };
    
    yield axios.post('/feedback', feedback)
  } catch (error) {
    console.error('Error in submitFeedback Saga:', error);
  }
}; 



function* rootSaga() {
    yield watcherSaga();
  };




  const store = createStore(
    combineReducers({
      feedbackItemOne,
      feedbackItemTwo,
      feedbackItemThree,
      feedbackItemFour
    }),
    applyMiddleware(sagaMiddleware, logger),
  );
  sagaMiddleware.run(rootSaga);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

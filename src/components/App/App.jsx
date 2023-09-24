import React from 'react';
// import axios from 'axios';
import './App.css';


import { HashRouter as Router, Route } from "react-router-dom";

import NavBar from '../NavBar/NavBar';

//Page Routes 
import QuestionOne from '../QuestionOne/QuestionOne.jsx';
import QuestionTwo from '../QuestionTwo/QuestionTwo.jsx';
import QuestionThree from '../QuestonThree/QuestionThree.jsx';
import QuestionFour from '../QuestionFour/QuestionFour.jsx'; 
import ReviewPage from '../ReviewPage/ReviewPage'; 
import SubmissionSucessPage from '../SubmissionSucessPage/SubmissionSucessPage'; 


function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar />

            <Route path="/">
              <QuestionOne />
            </Route>

            <Route path="/QuestionTwo">
              <QuestionTwo/>
            </Route>
         
            <Route path="/QuestionThree">
              <QuestionThree/>
            </Route>

            <Route path="/QuestionFour">            
              <QuestionFour />
            </Route>

            <Route path="/ReviewPage">            
              <ReviewPage />
            </Route>

            <Route path="/SubmissionSucessPage">            
              <SubmissionSucessPage />
            </Route>

        </Router>
    </div>
  );
}

export default App;

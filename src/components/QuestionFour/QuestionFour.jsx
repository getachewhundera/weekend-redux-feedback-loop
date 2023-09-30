import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



//Material UI dialog box 
import Button from '@mui/material/Button';


function QuestionFour() {

    const history = useHistory();

    const dispatch = useDispatch(); 

    let [questionFourInput, setQuestionFourInput] = useState(null); 

    const handleChangeFor = (value) => {
        console.log('event happened'); 
        setQuestionFourInput(value); 
    };

    const handleInput = (event) => {
        event.preventDefault();
        console.log('action was dispatched')
        dispatch({ type: 'ADD_ANSWER_FOUR', payload: questionFourInput});
        setQuestionFourInput(null);
        history.push('/ReviewPage');
    };




    return (
        <>
            <h1> Any comments you want to leave? </h1>
            <h2> Comments? </h2>

            <form  > 
                <input 
                type="text"
                style={ {width: '100px', height: '30px'}} 
                placeholder="Comment"
                maxLength={40}
                value={questionFourInput || ''} 
                onChange={(event) => handleChangeFor(event.target.value)} //will be stored in state as a string
                />
    

            <Button
                onClick= {handleInput}
                variant="contained"
                color="primary" 
            > Next </Button>

            </form>




        </>
    )
};

export default QuestionFour; 

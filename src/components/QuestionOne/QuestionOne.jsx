import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



//Material UI dialog box 
import Button from '@mui/material/Button';


function QuestionOne() {

    const history = useHistory();

    const dispatch = useDispatch(); 

    let [questionOneInput, setQuestionOneInput] = useState(null); 

    const handleChangeFor = (value) => {
        console.log('event happened'); 
        setQuestionOneInput( Number(value)); 
    };

    const handleInput = (event) => {
        event.preventDefault();
        console.log('action was dispatched')
        dispatch({ type: 'ADD_ANSWER_ONE', payload: questionOneInput});
        setQuestionOneInput(null);
        history.push('/QuestionTwo');
    };




    return (
        <>
            <h1> How are you feeling today? </h1>
            <h2> Feeling? </h2>

            <form  > 
                <input 
                type="number"
                style={ {width: '100px', height: '30px'}}
                min={1} max={5}  
                placeholder="1-5"
                value={questionOneInput || ''} 
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

export default QuestionOne; 
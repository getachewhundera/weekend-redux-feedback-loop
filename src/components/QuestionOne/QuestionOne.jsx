import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";



//Material UI dialog box 
import Button from '@mui/material/Button';


function QuestionOne() {

    const dispatch = useDispatch(); 

    let [questionOneInput, setQuestionOneInput] = useState({qOneInput: ''}); 

    const handleChangeFor = (value) => {
        console.log('event happened'); 
        setQuestionOneInput({qOneInput: value})
    }

    const handleInput = () => {
        event.preventDefault();
        dispatch({ type: 'SEND_QUESTIONONE_INPUT_TO_SERVER', payload: questionOneInput})
        setQuestionOneInput({ qOneInput: '' })
        

    }




    return (
        <>
            <h1> How are you feeling today? </h1>
            <h2> Feeling? </h2>

            <form onSubmit= {handleInput}> 
                <input 
                type="number" 
                min={1} max={5}  
                placeholder="1-5"
                value={questionOneInput.qOneInput}
                onChange={(event) => handleChangeFor('qOneInput', event.target.value)}
                />
            </form>

            <Button
                component={Link}
                to={"/QuestionTwo"}
                variant="contained"
                color="primary" 
            > Next </Button>


        </>
    )
};

export default QuestionOne; 
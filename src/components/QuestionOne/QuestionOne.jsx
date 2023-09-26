import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";



//Material UI dialog box 
import Button from '@mui/material/Button';


function QuestionOne() {

    const dispatch = useDispatch(); 

    let [questionOneInput, setQuestionOneInput] = useState({questionOneInput: ''}); 

    //propertyname will take in the questionOneInput property when a value is inputted. 
    //good for multiple inputs/dynammically sets the property
    const handleChangeFor = (propertyname, value) => {
        console.log('event happened'); 
        setQuestionOneInput({...questionOneInput, [propertyname]: Number(value)})
    }

    const handleInput = () => {
        event.preventDefault();
        console.log('action was dispatched')
        dispatch({ type: 'ADD_FEEDBACK', payload: questionOneInput.questionOneInput})
        

    }




    return (
        <>
            <h1> How are you feeling today? </h1>
            <h2> Feeling? </h2>

            <form > 
                <input 
                type="number"
                style={ {width: '100px', height: '30px'}}
                min={1} max={5}  
                placeholder="1-5"
                value={questionOneInput.questionOneInput} //starts as an empty array
                onChange={(event) => handleChangeFor('questionOneInput', event.target.value)} //will be stored in state as a string
                />
    

            <Button
                onClick= {handleInput}
                component={Link}
                to={"/QuestionTwo"}
                variant="contained"
                color="primary" 
            > Next </Button>

            </form>




        </>
    )
};

export default QuestionOne; 
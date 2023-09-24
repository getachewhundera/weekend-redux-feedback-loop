import React from "react";
import { useHistory } from 'react-router-dom';

//Material UI dialog box 
import Button from '@mui/material/Button';



function QuestionOne() {

    const history = useHistory(); 

    const handleRoute = () => {
        history.push('/QuestionTwo');
    };


    return (
        <>
            <h1> How are you feeling today? </h1>
            <h2> Feeling? </h2>

            <Button id='returnButton' variant='outline' onClick={handleRoute}> Next </Button>


        </>
    )
};

export default QuestionOne; 
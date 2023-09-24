import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';


function QuestionOne() {

    return (
        <>
            <h1> How are you feeling today? </h1>
            <h2> Feeling? </h2>

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
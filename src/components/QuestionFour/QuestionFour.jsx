import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';

function QuestionFour() {


    return(
        <>
        <h1> Any comments you want to leave? </h1>


            <h2> Comments? </h2>

            <Button
                component={Link}
                to={"/ReviewPage"}
                variant="contained"
                color="primary"
            > Next </Button>
        
        
        
        </>
    )
};

export default QuestionFour; 
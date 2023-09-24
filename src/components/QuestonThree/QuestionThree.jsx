import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';


function QuestionThree() {


    return(
        <>
        <h1> How well are you being supported? </h1>


            <h2> Support? </h2>

            <Button
                component={Link}
                to={"/QuestionFour"}
                variant="contained"
                color="primary"
            > Next </Button>
  

        
        
        
        
        </>
    )
};

export default QuestionThree; 
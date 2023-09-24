import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';



function QuestionTwo() {


    return (
        <>
            <h1> How well are you understanding the content? </h1>


            <h2> Understanding? </h2>

            <Button
                component={Link}
                to={"/QuestionThree"}
                variant="contained"
                color="primary"
            > Next </Button>





        </>
    )
};

export default QuestionTwo; 
import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';





function ReviewPage() {


    return(
        <>
        <h1> REVIEW YOUR FEEDBACK</h1>



        <Button
                component={Link}
                to={"/SubmissionSucessPage"}
                variant="contained"
                color="primary"
            > Submit </Button>


        
  
        
        
        
        
        </>
    )
};

export default ReviewPage; 
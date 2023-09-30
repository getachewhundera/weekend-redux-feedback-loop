import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';



function SubmissionSucessPage() {


    return(
        <>
        <h1> Feedback! </h1> 



        <h2> Submission Sucessful. Thank You! </h2>

        <Button
                component={Link}
                to={"/"}
                variant="contained"
                color="primary"
            > Leave New Feedback </Button>
        
    
        
        
        
        </>
    )
};

export default SubmissionSucessPage; 
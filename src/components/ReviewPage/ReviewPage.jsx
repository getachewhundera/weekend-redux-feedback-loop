import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';
import { useSelector } from "react-redux";



//Need to have all sumbitted questions show up in this review page, 
//Have questions be held in temproary storage, render it in this page, and when sumbit gets clicked have it sent to database for "permanent storage"

function ReviewPage() {

    const feedbackItems = useSelector(store => store.feedbackItems);


    return (
        <>
            <h1> REVIEW YOUR FEEDBACK</h1>


            <ul>
                {feedbackItems.map((feedback, i) => (
                    <li key={i}>{feedback}</li>
                ))}
            </ul>





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
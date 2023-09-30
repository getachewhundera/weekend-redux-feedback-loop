import React from "react";
import { Link } from "react-router-dom"



//Material UI dialog box 
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";



//Need to have all inputted questions show up in this review page, 
//Have questions be held in temproary storage, render it in this page, and when sumbit gets clicked have it sent to database for "permanent storage"

function ReviewPage() {

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch({ type: 'SUBMIT_FEEDBACK' }); 
    }; 

    const feedbackItemOne = useSelector(store => store.feedbackItemOne);
    const feedbackItemTwo = useSelector(store => store.feedbackItemTwo);
    const feedbackItemThree = useSelector(store => store.feedbackItemThree);
    const feedbackItemFour = useSelector(store => store.feedbackItemFour);




    return (

        <>
            <h1> REVIEW YOUR FEEDBACK</h1>


            <h2> Feeling: </h2>
            <ul>
                {feedbackItemOne.map((feedback, i) => (
                    <div key={i}>{feedback}</div>
                ))}
            </ul>

            <h2> Understanding: </h2>
            <ul>
                {feedbackItemTwo.map((feedback, i) => (
                    <div key={i}>{feedback}</div>
                ))}
            </ul>

            <h2> Support: </h2>
            <ul>
                {feedbackItemThree.map((feedback, i) => (
                    <div key={i}>{feedback}</div>
                ))}
            </ul>

            <h2> Comments: </h2>
            <ul>
                {feedbackItemFour.map((feedback, i) => (
                    <div key={i}>{feedback || 'Not Answered'}</div>
                ))}
            </ul>

            <Button
                onClick={handleSubmit}
                component={Link}
                to={"/SubmissionSucessPage"}
                variant="contained"
                color="primary"
            > Submit </Button>


        </>
    );
};

export default ReviewPage; 
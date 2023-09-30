import React from "react"
import { Link } from "react-router-dom"


//Material UI dialog box 
import Button from '@mui/material/Button';

function NavBar() {


    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>

                <Button
                    component={Link}
                    to={"/"}
                    variant="contained"
                    color="primary"
                > Home </Button>
                <h1> new comment </h1> 

            </header> 
            {/* //lc */}

        </>
        
    );
};

export default NavBar
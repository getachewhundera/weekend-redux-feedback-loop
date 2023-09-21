


function QuestionOne() {

    let [Rating,  setRating ]= useState(['']);
    let [ratingInput, setRatingInput]= useState([])

    const handleSubmit() => {
        console.log('user inputted:', setRating(ratingInput)); 

        setRating(ratingInput); 



    }






    return(
        <>
        <h1> How are you feeling today? </h1>

        <form>
            <h2> Feeling? </h2>
            <input type="number"  onChange={(event) setRatingInput(ratingInput)} />
            <button> Next </button>
        
        
        
        
        
        
        </>
    )
}
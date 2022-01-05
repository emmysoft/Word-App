import React, { useState } from 'react';
import './TextArea.css';
import axios from 'axios';


function TextArea() {

    const [word, setWord] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [result, setResult] = useState("");

     async function fetchData() {
       const options = {
         credentials: "include",
         method: "GET",
         url: "https://wordsapiv1.p.rapidapi.com/words/.22-caliber/pertainsTo",
         headers: {
           "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
           "x-rapidapi-key":
             "ac86bfe759msh1338137a7c3b52cp1a689ajsn6c1a922772cc",
         },
       };

       axios
         .post()
         .request(options)
         .then(function (response) {
           console.log(response.data);
           setResult(response.data.result);
           setIsLoading(false);
         })
         .catch(function (error) {
           console.error(error);
         });
     }


    return (
      <>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetchData();
            setWord();
            setIsLoading(true);
          }}
          className="form"
        >
          <input
            onChange={(event) => setWord(event.target.value)}
            type="text"
            name="text"
            id="text"
            value={word}
            placeholder="Enter any word here…"
          />
          <button className="btn">Analyze</button>
        </form>

        {isLoading ? (
          <div className="data">
            <p> Loading...</p>
          </div>
        ) : (
          <div className="data">
            <p>
              Related to: <span>{result} </span>
            </p>
          </div>
        )}
      </>
    );
}

export default TextArea;
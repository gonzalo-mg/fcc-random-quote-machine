/* 
quote-box
*/
import "./index.css";
//import PropTypes from "prop-types";

import { ButtonGeneric } from "../ButtonGeneric";

import { useEffect, useState } from "react";
import { getQuotesLibraryService } from "../../services/getQuotes";

export const QuoteBox = ({library}) => {
  
  //set up quotes cache
  console.log("QuoteBox - mounting");
  console.log("QuoteBox - library:");
  console.log(library);

  //const [quotesLibrary, setLibrary] = useState([]);
  const [quote, setQuote] = useState("quote-0state");
  const [author, setAuthor] = useState("author-0state");


  const getRandomQuote = () => {
    //choose random quote object with random index to choose from cache of quotes
    const randomQuote =
      library[Math.floor(Math.random() * library.length)];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  // autoload and refresh quote
  //useEffect(()=>getRandomQuote(), []);

  return (
    <article id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <ButtonGeneric
        id={"new-quote"}
        text={"Other"}
        onClickFunction={getRandomQuote}
      ></ButtonGeneric>
      <a id={"tweet-quote"} href="twitter.com/intent/tweet">
        tweet it
      </a>
    </article>
  );
};

/* QuoteBox.propTypes = {
  quotes: PropTypes.isRequired
} */

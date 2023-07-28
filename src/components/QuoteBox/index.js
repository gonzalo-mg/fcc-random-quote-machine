/* 
quote-box
*/
import "./index.css";
//import PropTypes from "prop-types";

import { ButtonGeneric } from "../ButtonGeneric";

import { useEffect, useState } from "react";
import { getQuotesLibraryService } from "../../services/getQuotes";

export const QuoteBox = () => {
  // set up quotes cache and variables
  const quotesLibrary = getQuotesLibraryService();
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();

  const getRandomQuote = () => {
    //choose random quote object with random index to choose from cache of quotes
    const randomQuote =
      quotesLibrary[Math.floor(Math.random() * quotesLibrary.length)];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  // autoload and refresh quote
  useEffect(() => {
    const updateQuote = () => {
      return getRandomQuote();
    };
    updateQuote();
  }, []);

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

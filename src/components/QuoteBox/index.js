/* 
quote-box
*/
import "./index.css";
//import PropTypes from "prop-types";

import { ButtonGeneric } from "../ButtonGeneric";

import { useEffect, useState } from "react";
import { getQuotesLibraryService } from "../../services/getQuotes";

export const QuoteBox = () => {
  
  //set up quotes cache
  console.log("QuoteBox - mounting");

  const [quotesLibrary, setLibrary] = useState([]);
  const [quote, setQuote] = useState("quote-0state");
  const [author, setAuthor] = useState("author-0state");

  console.log("QuoteBox - calling to getQuotesLibraryService()")
  
  useEffect(
    ()=>{
      const getQuotesLibrary = async () => {
        const recoveredQuotes = await getQuotesLibraryService();
        setLibrary(recoveredQuotes)
      };
      getQuotesLibrary();
    }
    ,[])
  

  console.log("QuoteBox - quotesLibrary:");
  console.log(quotesLibrary);

  

  const getRandomQuote = () => {
    //choose random quote object with random index to choose from cache of quotes
    const randomQuote =
      quotesLibrary[Math.floor(Math.random() * quotesLibrary.length)];

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

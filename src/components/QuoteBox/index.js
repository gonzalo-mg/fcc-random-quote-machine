/* 
quote-box
*/
import "./index.css";
//import PropTypes from "prop-types";
import { getQuotesLibraryService } from "../../services/getQuotes";

import { ButtonGeneric } from "../ButtonGeneric";

import { useEffect, useState } from "react";

export const QuoteBox = () => {
  //set up quotes cache

  const [library, setLibrary] = useState([]);

  // fetch quotes array
  useEffect(
    ()=>{
      const getQuotesLibrary = async () => {
        const recoveredQuotes = await getQuotesLibraryService();
        setLibrary(recoveredQuotes)
      };
      getQuotesLibrary();
    }
    ,[])

    const [text, setText] = useState("Quotes are pretentious");
    const [author, setAuthor] = useState("Myself");

  const getRandomQuote = async () => {
    //choose random quote object with random index to choose from cache of quotes
    const randomQuote = library[Math.floor(Math.random() * library.length)];

    setText(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

/*    // autoload and refresh quote
  useEffect(
    ()=>{
      const chooseQuote = async () => {
        const randomQuote = await getRandomQuote();
        setText(randomQuote.quote);
        setAuthor(randomQuote.author);
      };
      chooseQuote();
    }
    ,[]); */

  return (
    <article id="quote-box">
      <p id="text">{text}</p>
      <p id="author">- {author} -</p>
      <ButtonGeneric
        id={"new-quote"}
        text={"Other quote"}
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

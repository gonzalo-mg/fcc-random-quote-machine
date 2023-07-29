/* 
quote-box
*/
import "./index.css";

import { ButtonGeneric } from "../ButtonGeneric";

import { useState } from "react";
import { loadQuotesArray } from "../../quotesBackupLibrary";

export const QuoteBox = () => {
  //set up quotes cache
  const library = loadQuotesArray();

  const [text, setText] = useState();
  const [author, setAuthor] = useState();

  const getRandomQuote = async () => {
    //choose random quote object with random index to choose from cache of quotes
    const randomQuote = library[Math.floor(Math.random() * library.length)];
    setText(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

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
        To Elon
      </a>
    </article>
  );
};

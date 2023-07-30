/* 
quote-box
*/
import "./index.css";

import { ButtonGeneric } from "../ButtonGeneric";

import { useState } from "react";
import { loadHomerQuotes, loadQuotesArray } from "../../quotesBackupLibrary";

export const QuoteBox = () => {
  //set up quotes cache and states
  // i want homer to be always the firstauthor
  const homerLibrary = loadHomerQuotes();
  const library = loadQuotesArray();

  const zeroText =
    homerLibrary[Math.floor(Math.random() * homerLibrary.length)].quote;
  const [text, setText] = useState(zeroText);
  const [author, setAuthor] = useState("Homer J. Simpson");

  // f to choose random quote by using a random index to acces the array
  const getRandomQuote = async () => {
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

import { useEffect, useState } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox';

import { getQuotesLibraryService } from "./services/getQuotes";

function App() {

  const [quotesLibrary, setLibrary] = useState([]);

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

  return (
    <QuoteBox library={quotesLibrary}></QuoteBox>
  );
}

export default App;

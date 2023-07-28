import './App.css';
import { QuoteBox } from './components/QuoteBox';
//import { getRandomQuoteService } from './services/getRandomQuote';

function App() {
  // cache an array of quotes on start
  //const quotes = getRandomQuoteService();
  return (
    <QuoteBox></QuoteBox>
  );
}

export default App;

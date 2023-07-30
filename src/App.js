import "./App.css";
import { QuoteBox } from "./components/QuoteBox";

function App() {
  return (
    <article id="rootArticle">
      <header>Random Quote Machine</header>
      <main>
        <QuoteBox></QuoteBox>
      </main>
      <footer>Gonzalo M.G.</footer>
    </article>
  );
}

export default App;

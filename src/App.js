import { useEffect, useState } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox';

function App() {

  return (
    <>
      <header>Random Quote Machine</header>
      <QuoteBox></QuoteBox>
      <footer>Gonzalo M.G.</footer>
    </>
  );
}

export default App;

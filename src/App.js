import InputShortner from './InputShortner';
import './App.css';
import { useState } from 'react';
import LinkResult from './LinkResult';

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;

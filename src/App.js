import { useState, createContext } from 'react'
import { boardDefault } from './Words'
import './App.css';
import Board from './components/Board';
import Keyboard from './components/keyboard';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt ,setCurrAttempt] = useState({attempt: 0, letterPos: 0});

  const onSelectLetter = (keyValue) => {
    if (currAttempt.letterPos === 5) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letterPos] = keyValue;
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0});
  }

  const onDelete = () => {
    const newBoard = [...board];
      if(currAttempt.letterPos === 0) return;
      newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }
  return (
    <div className="App">
      <header>
        <nav>
          <h1>Wordel</h1>
        </nav>
      </header>
      <AppContext.Provider 
      value={{ board, setBoard, currAttempt ,setCurrAttempt, onSelectLetter, onEnter, onDelete }} 
      >
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

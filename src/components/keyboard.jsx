import React, { useCallback, useEffect, useContext } from 'react';
import Key  from './key';
import { AppContext } from '../App'

function keyboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);
  const key1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const key2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const key3 = ["Z", "X", "C", "V", "B", "N", "M"];

  // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/rules-of-hooks
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter"){
      onEnter();

    } else if (event.key === "Backspace") {
      onDelete();

    } else {
      key1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      key2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      key3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    }
  }, [handleKeyboard])
  


  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className="line1">
        {key1.map((key) => {
          return  <Key keyValue={key}/>;
        })}
      </div>
      <div className="line2">
        {key2.map((key) => {
          return <Key  keyValue={key}/>;
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} bigKey/>
        {key3.map((key) => {
          return <Key keyValue={key}/>;
        })}
        <Key keyValue={"DELETE"} bigKey/>
      </div>
    </div>
  )
}

export default keyboard;
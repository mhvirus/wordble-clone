import React, { useContext } from 'react';
import { AppContext } from '../App'

function Letter({letterPosition, attempValue}) {

  const { board } = useContext(AppContext);
  const letter = board[attempValue][letterPosition];

  return (
    <div className='letter'>
      {letter}
    </div>
  )
}

export default Letter
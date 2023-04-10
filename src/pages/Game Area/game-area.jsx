import React, { useState } from 'react'

function GameArea() {
    const [boardArr, setboardArr] = useState([
        '','','',
        '','','',
        '','','',
    ]);
    const [turn, setturn] = useState("O")

    function handleClick(index) {
        if (boardArr[index] === "") {
            const newBoardArr = [...boardArr];
            newBoardArr[index] = turn;
            setboardArr(newBoardArr);
            setturn((prevTurn) => prevTurn === "O" ? "X" : "O");
        }
    }
    
  return (
    <div className='container'>
        <h1>{turn}'s turn</h1>
        <div className='board'>
            {
                boardArr && boardArr.map((item,index)=>{
                    return <div className='board-item' key={index} onClick={()=>handleClick(index)}>{item}</div>
                })

            }
        </div>
    </div>

  )
}

export default GameArea
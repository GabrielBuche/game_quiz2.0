import './styles.css'

import { questions }from '../../utils/dataQuest'

import { Button } from '@mui/material'
import { useEffect, useState } from 'react'



export function Game(){
    const [ questionNumber, setQuestionNumber] = useState(0)
    const [ score, setScore] = useState(0)
    const [ segundos, setSegundos ] = useState(15);
    useEffect(()=>{
        setSegundos(15)
    }, [questionNumber])
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos - 1);
      }, 1000);
    
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    
    useEffect(() => {
      if (segundos === 0) {
        nextQuestion();
        setSegundos(15); 
      }
    }, [segundos]);
    
    
    function nextQuestion(){
        setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
    }

    function handleClickResponse(selectedOption: string){
        if(selectedOption === questions[questionNumber].answer){
            segundos <= 10 && segundos > 0 ? setScore((prevScore) => prevScore + 1500) : setScore((prevScore) => prevScore + 750);
        }
        nextQuestion()
      
    }
    return (
        <div id="content">
                <div id="quiz">
                    <h1>Quiz Game</h1>
                    <div id="question"></div>
                    <div id="options"></div>
                    <div id="score">Score: {score}</div>
                    <h3>{segundos} segundos</h3>
                    <h2>{questions[questionNumber].question}</h2>
                    {
                        questions[questionNumber].options.map((data)=>{
                            return(
                                <div key={data.id}>
                                    <Button type="button" onClick={() => {handleClickResponse(data.id)}}>
                                        {data.text}
                                    </Button>   
                                </div>
                            )       
                        })
                    }
                </div>
        </div>
    )
}
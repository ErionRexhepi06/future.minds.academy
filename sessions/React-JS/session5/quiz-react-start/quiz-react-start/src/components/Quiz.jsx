import { useState, useCallback } from 'react';
import QUESTIONS from '../assets/js/questions.js';
import quizCompleteImg from '../../src/assets/quiz-complete.png';
import QuestionTimer from './QuizTimer.jsx';

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);
    const [points, setPoints] = useState(0);
    const activeQuestionIndex = userAnswers.length;
    
    const quizIsCompelte = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswers = useCallback(selectedAnswer => {
        setUserAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
        
        if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
            setPoints(prevPoints => prevPoints+1);
        }
        
    }, [activeQuestionIndex]);

    const handleSkipAnswer = useCallback(()=> handleSelectAnswers(null), [handleSelectAnswers])

    if(quizIsCompelte){
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Quiz Completed" />
                <h2>Quiz Complete</h2>
                <h2 className='text-center'>{points} / {QUESTIONS.length}</h2>
            </div>

        );
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random()-0.5);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    key = {activeQuestionIndex}
                    timeout = {10000} //10 seconds in miliseconds
                    onTimeout = {handleSkipAnswer}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => 
                        <li key={answer} className='answer'>
                            <button onClick={()=>handleSelectAnswers(answer)}>{answer}</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
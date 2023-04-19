import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { quizzes } from './quizzes'

function App() {
  const [currentQuiz, setCurrentQuiz] = useState()
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [allQuizzes, setAllQuizzes] = useState(1)
  const [isQuizEnded, setIsQuizEnded] = useState(false)
  const [countdown, setCountdown] = useState(20)
  const [isGameStarted, setIsGameStarted] = useState(false)
  const timer = useRef(null)
  const timer2 = useRef(null)
  const [alreadyAnswered, setAlreadyAnswered] = useState([])
  const handleQuiz = (answer = '') => {
    if (currentQuiz.correct_answer === answer) {
      setCorrectAnswers(prev => prev + 1)
    }
    if (allQuizzes === 8) {
      setIsQuizEnded(true)
    } else {
      setAllQuizzes(prev => prev + 1)
    }
  }
  const generateQuestion = () => {
    const availableQuestions = quizzes.filter(question => !alreadyAnswered.includes(question.id))
    if (availableQuestions.length === 0) {
      return null
    }
    const num = Math.floor(Math.random() * availableQuestions.length)
    const randomQuestion = availableQuestions[num]
    setAlreadyAnswered([...alreadyAnswered, randomQuestion.id])
    return randomQuestion
  }
  const startQuiz = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    setCountdown(20)
    timer.current = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)
    setTimeout(() => {
      clearInterval(timer.current)
      handleQuiz()
    }, 20 * 1000)
  }
  useEffect(() => {
    if (isGameStarted) {
      startQuiz()
      setCurrentQuiz(generateQuestion())
    }
  }, [allQuizzes, isGameStarted])
  return (
    <div className="bg-main flex justify-center items-center h-screen w-screen">
      <div className=" min-w-[40%] min-h-[60%] flex items-center justify-center rounded-lg bg-secondary">
        {
          isGameStarted ? isQuizEnded ? <div className="text-center font-bold space-y-4">
            <p>Quiz Ended Thank you for playing.<br />Your score is
              <span className="text-blue-300 ml-2">{correctAnswers}</span>
            </p>
            <button onClick={()=>{window.location.reload()}} className="bg-third font-bold p-4 text-lg rounded-lg text-fourth border border-fourth transition active:bg-opacity-60 hover:bg-opacity-70">Play Again ?</button>
          </div> :
            currentQuiz && <div className="w-full space-y-10">
              <p className="text-right px-10 font-semibold">Question {allQuizzes}/8</p>
              <p className="text-center text text-main font-bold">Timer: {countdown}</p>
              <p className="text-center text-2xl w-96 mx-auto text-main font-bold">Question {allQuizzes}: {currentQuiz.title}</p>
              <div className="grid gap-4 px-12">
                {
                  currentQuiz.answers.map((answer) => {
                    return (
                      <button className="bg-third font-bold p-4 text-lg rounded-lg text-fourth border border-fourth transition active:bg-opacity-60 hover:bg-opacity-70" onClick={() => { handleQuiz(answer) }} key={answer}>{answer}</button>
                    )

                  })
                }
              </div>
            </div> : <div className="text-center font-bold space-y-4">
            <p>
              Test your crypto knowledge with Quizzes !
            </p>
            <button onClick={() => { setIsGameStarted(true) }} className="bg-third font-bold p-4 text-lg rounded-lg text-fourth border border-fourth transition active:bg-opacity-60 hover:bg-opacity-70">Play</button>
          </div>
        }
      </div>
    </div>
  )
}

export default App

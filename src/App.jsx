import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { quizzes } from './quizzes'
import PlayButton from './assets/PlayButton'
import Background from './assets/Background'
import CorrectIcon from './assets/CorrectIcon'
import IncorrectIcon from './assets/IncorrectIcon'

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
    clearTimeout(timer2.current)
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
    timer2.current = setTimeout(() => {
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
    <div className="bg-[#f4f4f5] relative flex justify-center items-center h-screen w-screen">
      <Background className="absolute z-10 mx-auto left-0 right-0 text-center w-[600px]" />
      <div className=" min-w-[40%] min-h-[60%] z-20 flex items-center justify-center">
        {
          isGameStarted ? isQuizEnded ? <div className="text-center font-bold">
            <p className="text-5xl mb-8 font-bold text-black">
              Quiz Ended Thank you for playing.
            </p>
            <p className="font-bold text-black mb-[72px]">Here is your score</p>
            <div>
              <div className="flex items-center justify-center gap-32 mb-32">
                <div className="flex flex-col items-center">
                  <CorrectIcon className="w-[64px] h-[64px]"/>
                  <p className="text-2xl font-light">Correct</p>
                </div>
                <p className="text-6xl">{correctAnswers} - {8 - correctAnswers}</p>
                <div className="flex flex-col items-center">
                  <IncorrectIcon className="w-[64px] h-[64px]"/>
                  <p className="text-2xl font-light">Wrong</p>
                </div>
              </div>
              <button onClick={() => { window.location.reload() }} className="bg-[#00c386] mx-auto font-bold flex items-center text-lg rounded-full px-24 py-5 text-white transition justify-center gap-3 active:bg-opacity-60 hover:bg-opacity-70">
                <PlayButton className="w-8 h-8" />
                <p>Restart Quiz</p>
              </button>
            </div>

          </div> :
            currentQuiz && <div className="w-[564px] bg-white shadow p-8 rounded-lg space-y-10">
              <div className="flex items-center justify-between">
                <p className="text-right font-light">Question {allQuizzes}/8</p>
                <p className=" font-light border border-[#00c386] p-3 rounded-full">Timer: {countdown}</p>
              </div>

              <p className="text-center text-2xl w-96 mx-auto text-black font-bold">Question {allQuizzes}: {currentQuiz.title}</p>
              <div className="flex items-center gap-2">

              </div>
              <div className="grid gap-4 px-12">
                {
                  currentQuiz.answers.map((answer) => {
                    return (
                      <button className=" font-light p-4 text-lg rounded-lg text-black border border-[#00c386] transition active:opacity-60 hover:opacity-70" onClick={() => { handleQuiz(answer) }} key={answer}>{answer}</button>
                    )

                  })
                }
              </div>
            </div> : <div className="text-center text-5xl font-bold space-y-4">
            <p className="w-96">
              Test your crypto knowledge!
            </p>
            <button onClick={() => { setIsGameStarted(true) }} className="bg-[#00c386] mx-auto font-bold flex items-center text-lg rounded-full px-24 py-5 text-white transition justify-center gap-3 active:bg-opacity-60 hover:bg-opacity-70"><PlayButton className="w-8 h-8" /><p>Start Quiz</p></button>
          </div>
        }
      </div>
    </div>
  )
}

export default App

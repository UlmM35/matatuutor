import "./Score.css"
import Button from "../../components/Button/Button"
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { updateUser } from "../../reducers/userReducer";

const Score = () => {
  const currentUser = useSelector(({ user }) => user)
  const [question, setQuestion] = useState({ num1: 0, num2: 0, answer: 0, type: "", score: 0})
  const [userAnswer, setUserAnswer] = useState("")
  const [feedback, setFeedback] = useState("")

  const dispatch = useDispatch()

  const whichType = (num) => {
    let num1 = Math.floor(Math.random() * 100) + 1
    let num2 = Math.floor(Math.random() * 100) + 1
    if (num === 1) {
      setQuestion({ num1, num2, answer: num1 + num2, type: "+", score: 100})
    } else if (num === 2) {
      setQuestion({ num1, num2, answer: num1 - num2, type: "-", score: 100})
    } else if (num === 3) {
      setQuestion({ num1, num2, answer: num1 * num2, type: "*", score: 200})
    } else if (num === 4) {
      num2 = Math.floor(Math.random() * 10) + 1
      setQuestion({ num1, num2, answer: Number((num1 / num2).toFixed(1)), type: "/", score: 200})
    } else {
      setQuestion({ num1, num2, answer: num1 % num2, type: "mod", score: 300})
    }
  }

  const generateQuestion = () => {
    whichType(Math.floor(Math.random() * 5) + 1)
    setUserAnswer("")
    setFeedback("")
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const answer = Number(userAnswer)
    
    if (answer === question.answer) {
      setFeedback("Õige! 🎉")
      
      const newScore = (currentUser.score || 0) + question.score
      await dispatch(updateUser({ score: newScore}, currentUser.id))
      setTimeout(() => {
        generateQuestion()
      }, 1500)
    } else {
      setFeedback("Vale vastus, proovi uuesti!")
    }
  }

  return (
    <main className="score-page">
      <section className="score-box">
        <h2 className="score-title">Suurenda oma skoori!</h2>
        
        <div className="score-current">
          Praegune skoor: <strong>{currentUser?.score || 0}</strong>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="score-question-box">
            <div className="score-question">
              {question.num1} {question.type} {question.num2} = ?
            </div>
            
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Sisesta vastus"
              className="score-input"
              autoFocus
              step="any"
            />
          </div>

          <div className={`score-feedback ${feedback.includes("Õige") ? "correct" : feedback ? "incorrect" : ""}`}>
            {feedback}
          </div>

          <div className="score-btn-row">
            <Button text="Kontrolli" size="very-large-btn" type="submit" />
            <Link to="/edetabel">
              <Button text="Tagasi" size="very-large-btn" />
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Score
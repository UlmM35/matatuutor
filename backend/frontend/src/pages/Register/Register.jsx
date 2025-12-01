import "./Register.css"
import  { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Button from "../../components/Button/Button"
import { createUser } from "../../reducers/userReducer"

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await dispatch(createUser({
        username: username,
        email: email,
        password: password,
        score: 0
    }))
    setUsername("")
    setEmail("")
    setPassword("")

    if (success) {
      navigate("/")
    }
  }

  return (
    <div className="register-page">
      <div className="register-box">
        <h1 className="register-title">MataTuutor</h1>
        <p className="register-subtitle">Registreerimine</p>

        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nimi</label>
          <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} id="name" placeholder="Sisestage kasutajanimi" />

          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} id="email" placeholder="Sisestage oma email" />

          <label htmlFor="password">Parool</label>
          <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} id="password" placeholder="Sisestage parool" />

          <div className="user-terms">
              <input type="checkbox"  required/>
              <label htmlFor="user-terms">Olen nõus platvormi tingimustega
              </label>
          </div>
            <Button type="submit" className="register-page" text={"Registreeri"} size={"very-large-btn"} />
        </form>
        
        <p className="login-text">
          Kas on juba konto olemas? <Link to="/login">Logi sisse</Link>
        </p>
      </div>
    </div>
  )
}

export default Register

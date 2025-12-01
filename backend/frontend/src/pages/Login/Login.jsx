import "./Login.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import { initializeUser } from "../../reducers/userReducer"


const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const success = dispatch(initializeUser({ usernameOrEmail, password }))
        navigate("/")
        setUsernameOrEmail("")
        setPassword("")
        if (success) {
            navigate("/")
        }
    }

    return (
        <main className="login-container">

                <form className="login" onSubmit={handleSubmit}>

                    <div className="login-box" id="box1">
                        <div className="title">MataTuutor</div>
                        <div className="subtitle">Sisselogimine</div>

                        <div className="username-lable">Nimi</div>
                        <input type="text" value={usernameOrEmail} onChange={({ target }) => setUsernameOrEmail(target.value)}
                            id="username" className="username-input" placeholder="Sisestage oma nimi" />

                        <div className="password-lable">Parool</div>
                        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)}
                            id="password" className="password-input" placeholder="Sisestage oma parool" />

                        <Link to="/unustasid" className="link-unustasid"><Button className="login-forget" text={"Unustasid oma parooli?"} size={"hele-btn"} /></Link>
                        <Button type="submit" className="login" text={"Logi sisse"} size={"very-large-btn"} />
                        <Link to="/registreeri" className="link-registreeri"><Button className="login-register" text={<span>Pole veel kontot? <strong>Registreeri</strong></span>} size={"second-hele-btn"} /></Link>
                    </div>
                </form>

        </main>
    )
}

export default Login
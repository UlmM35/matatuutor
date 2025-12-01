import "./Navbar.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useSelector } from "react-redux"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const userIsAdmin = useSelector(({ user}) => user).role === "admin"

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="logo">MataTuutor</div>
            </div>

            <div className="hamburger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`navbar-menu ${open ? "open" : ""}`}>
                <ul className="nav-links">
                    <li><Link to="/"><Button size={"btn"} text={"Avaleht"} /></Link></li>
                    <li><Link to="/leia"><Button size={"btn"} text={"Leia õpetaja"} /></Link></li>
                    <li><Link to="/meist"><Button size={"btn"} text={"Meist"} /></Link></li>
                    <li><Link to="/edetabel"><Button size={"btn"} text={"Edetabel"}></Button></Link></li>
                    {userIsAdmin ? <li><Link to="/admin"><Button size={"btn"} text={"Admin"}></Button></Link></li> : null}
                </ul>     
            </div>

            <div className="navbar-right">
                <Link to="/profiil"><Button size={"btn"} text={"Minu Profiil"} /></Link>
            </div>
        </nav>
    )
}

export default Navbar

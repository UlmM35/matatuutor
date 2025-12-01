import "./TeacherCard.css"
import { Link } from "react-router-dom"
import Button from "../Button/Button"

const TeacherCard = ({ name, education, subject, price, picture }) => {

    return (
        <div className="container">
            <div className="card">
                <div className="profile-picture">
                    <img src={picture} alt="Profile Picture" />
                </div>
                <h2 className="name">{name}</h2>
                <h3 className="kraad">{education}</h3>
                <p className="õpetab">{subject}</p>
                <p className="description">{price}</p>
                <Link to={`/teacher/${encodeURIComponent(name)}`}><Button className="btn" size={"profile-btn"} text={"Vaata profiili"}/></Link>
            </div>
        </div>
    )
}

export default TeacherCard
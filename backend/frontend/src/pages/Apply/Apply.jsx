import Button from "../../components/Button/Button.jsx";
import "./Apply.css";
import {Link} from "react-router-dom";



const Apply = () => {

    return (
        <div className="apply-page">
          <div className="apply-box">
          <h1 className="apply-title">MataTuutor</h1>
          <p className="apply-subtitle">Kandideeri</p>

          <form className="apply-form">
            <label htmlFor="name">Nimi</label>
            <input type="text" id="name" placeholder="Sisestage kasutajanimi" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Sisestage oma email" />

            <label htmlFor="password">Parool</label>
            <input type="password" id="password" placeholder="Sisestage parool" />

            <label htmlFor="education">Haridus</label>
            <input type="education" id="education" placeholder="Sisestage oma haridus" />

            <label htmlFor="teach">Mida õpetad?</label>
            <input type="teach" id="teach" placeholder="Sisestage mida õpetate" />

            <label htmlFor="price">Hind</label>
            <input type="price" id="price" placeholder="Sisestage oma soovitud hind ...€/h" />

            <div className="user-terms_2">
                <input type="checkbox"  required/>
                <label htmlFor="user-terms_2">Olen nõus platvormi tingimustega
                </label>
            </div>
              <Button type="submit" className="register-page" text={"Registreeri"} size={"very-large-btn"} />
          </form>
      </div>
    </div>
    )
}

export default Apply
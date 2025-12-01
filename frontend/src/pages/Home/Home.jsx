import "./Home.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import TeacherCard from "../../components/TeacherCard/TeacherCard"
import mari from "../../images/mari.svg"
import marleen from "../../images/marleen.svg"
import mehis from "../../images/mehis.svg"
import luup from "../../images/luup.png"
import broneeri from "../../images/broneeri.png"
import maksa from "../../images/maksa.png"

const Home = () => {
  const [teachers] = useState([
    { name: "Mari Kräsupea", education: "Magistri tudeng", subject: "Diskreetne Matemaatika", price: "30€/tund", picture: mari},
    { name: "Mehis Mehine", education: "PhD Matemaatikas", subject: "Kõrgem matemaatika", price: "40€/tund", picture: mehis},
    { name: "Marleen Kask", education: "Bakalaureuse tudeng", subject: "Gümniaasiumi matemaatika", price: "26€/tund", picture: marleen},
  ])

  return (
    <main className="hero">

      <section className="leia">
        <div className="leia-text">Leia endale sobiv matemaatika eraõpetaja EESTIST!</div>
        <div className="broneeri-text">Broneeri tund veebis, maksa turvaliselt ja paranda oma tulemusi</div>
        <Link to={"/leia"}><Button size={"large-btn"} text={"Leia õpetaja!"}/></Link>
      </section>

      <section className="pakume">
        <div className="pakume-text">Mida me pakume?</div>
        <div className="pakume-mida">Pakume mugavat ja usaldusväärset veebiplatvormi, kus üliõpilased saavad kiiresti leida endale sobiva matemaatika eraõpetaja.</div>
        <Link to={"/loe-rohkem"}><Button size={"large-btn"} text={"Loe rohkem"}/></Link>
      </section>

      <section className="populaarsed">
        <div className="populaarsed-text">Populaarsed õpetajad</div>
        <div className="card-container">
          {teachers.map((t) => <TeacherCard key={t.name} name={t.name} education={t.education}
            subject={t.subject} price={t.price} picture={t.picture}
          />)}
        </div>
      </section>

      <section className="kuidas-toimib">
        <div className="toimib-text">Kuidas see toimib?</div>
        <div className="ikoonid">
          <div className="ikoon-1">
            <img src={luup} alt="luup"/>
              <div className="ikoon-text">Leia õpetaja</div>
          </div>
          <div className="ikoon-2">
            <img src={broneeri} alt="broneeri"/>
              <div className="ikoon-text" >Broneeri aeg</div>
          </div>
          <div className="ikoon-3">
            <img src={maksa} alt="maksa" />
              <div className="ikoon-text">Maksa turvaliselt</div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
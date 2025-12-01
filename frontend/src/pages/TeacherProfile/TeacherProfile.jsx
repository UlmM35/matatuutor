import "./TeacherProfile.css";
import { Link, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { deleteTeacher } from "../../reducers/teacherReducer";
import Button from "../../components/Button/Button";
import mari from "../../images/mari.svg";
import mehis from "../../images/mehis.svg";
import marleen from "../../images/marleen.svg";
import anti from "../../images/anti.svg";
import anna from "../../images/anna.svg";
import mari_tamm from "../../images/mari_tamm.svg";
import madis from "../../images/madis.svg";
import herman from "../../images/herman.svg";
import ants from "../../images/ants.svg";
import juhan from "../../images/juhan.svg";
import leena from "../../images/leena.svg";
import toomas from "../../images/toomas.svg";
import hannah from "../../images/hannah.svg";
import robin from "../../images/robin.svg";
import joonas from "../../images/joonas.svg";
import johanna from "../../images/johanna.svg";


const pictures = [
  { name: "Mari Kräsupea", picture: mari },
  { name: "Mehis Mehine", picture: mehis },
  { name: "Marleen Kask", picture: marleen },
  { name: "Toomas Sularaha", picture: toomas },
  { name: "Anti Nuga", picture: anti },
  { name: "Anna Ploom", picture: anna },
  { name: "Mari Tamm", picture: mari_tamm },
  { name: "Madis Mesi", picture: madis },
  { name: "Herman Tarkpea", picture: herman },
  { name: "Ants Sulane", picture: ants },
  { name: "Juhan Tammsalu", picture: juhan },
  { name: "Leena Hiinlane", picture: leena },
  { name: "Hannah Labane", picture: hannah },
  { name: "Robin Kiire", picture: robin },
  { name: "Joonas Mets", picture: joonas },
  { name: "Johanna Leem", picture: johanna }
];

const TeacherProfile = () => {

  const { name } = useParams()

  const dispatch = useDispatch()

  const decodedName = decodeURIComponent(name)

  const teacher = useSelector(({ teachers }) => teachers).filter(t => t.name === decodedName)[0]

  const isAdmin = useSelector(({ user }) => user).role === "admin"
  const picture = pictures.find(p => p.name === decodedName)

  const handleSubmit = (e) => {
    e.preventDefault()
    const remove = window.confirm('Delete teacher?')
    if (remove) {
      dispatch(deleteTeacher(teacher.id))
    }
  }

  return (
    <main className="teacherprofile-page">
      <section className="teacherprofile-box">

        <div className="teacherprofile-header">
          <img src={picture.picture} alt="Õpetaja pilt" className="teacherprofile-img" loading="lazy" style={{ width: "120px", height: "auto" }} />
          <div className="teacherprofile-info">
            <h1 className="teacherprofile-name">{teacher.name}</h1>
            <p className="teacherprofile-title">{teacher.education}</p>
            <Link to="/booking" state={{ teacher: teacher, fromPage: 'profile' }} className="broneeri"><Button text="Broneeri" size={"profile-btn"} type="button" /></Link>
          </div>
        </div>

        <div className="teacherprofile-section">
          <h2 className="teacherprofile-subtitle">Minust endast</h2>
          <div className="teacherprofile-boxed-text">
            {teacher.about}
          </div>
        </div>

        <div className="teacherprofile-section">
          <h2 className="teacherprofile-subtitle">Saavutused</h2>
          <div className="teacherprofile-boxed-text">
            - {teacher.accomplishments[0]}<br />
            - {teacher.accomplishments[1]}<br />
            - {teacher.accomplishments[2]}<br />
          </div>
        </div>

        <div className="teacherprofile-section">
          <h2 className="teacherprofile-subtitle">Tagasiside klientidelt</h2>
          <div className="teacherprofile-feedback">
            <div className="teacherprofile-feedback-card">
              <p className="feedback-name">{teacher.feedback[0].name}</p>
              <p>{teacher.feedback[0].text}</p>
            </div>
            <div className="teacherprofile-feedback-card">
              <p className="feedback-name">{teacher.feedback[1].name}</p>
              <p>{teacher.feedback[1].text}</p>
            </div>
            <div className="teacherprofile-feedback-card">
              <p className="feedback-name">{teacher.feedback[2].name}</p>
              <p>{teacher.feedback[2].text}</p>
            </div>
          </div>

          {isAdmin ? <div className="teacherprofile-btn-row">
            <Button text="Kustuta õpetaja" size={"red-btn"} type="submit" onClick={handleSubmit}/>
          </div> : null}
        </div>
      </section>
    </main>
  );
};

export default TeacherProfile;

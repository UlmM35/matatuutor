import "./FindTeacher.css"
import { useSelector } from "react-redux";
import TeacherCard from "../../components/TeacherCard/TeacherCard"
import { useState } from "react";
import ProfileModal from "../../components/ProfileModal/ProfileModal";
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

const FindTeacher = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");

    const teachers = useSelector(({ teachers }) => teachers)

    const isAdmin = useSelector(({ user }) => user).role === "admin"

    const filteredTeachers = searchTerm
        ? teachers.filter((t) => t.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : teachers

    const getPicture = (teacherName) => {
        const picture = pictures.find(t => t.name === teacherName)
        return picture.picture
    }
    
    const handleSubmit = () => {

    }

    return (
        <main className="teacher-container">
            <section className="find">
                <div className="teacher-header">Leia õpetaja</div>

                <div className="search-container">
                    <input
                        type="text"
                        id="teacher"
                        className="teacher-input"
                        placeholder="Sisestage õpetaja nimi"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="card-container">

                    {filteredTeachers.map((t) => (
                        <TeacherCard
                            key={t.name}
                            name={t.name}
                            education={t.education}
                            subject={t.subject}
                            price={t.price}
                            picture={getPicture(t.name)}
                        />
                    ))}

                    {isAdmin && (
                        <div>
                            <div className="add-teacher-card">
                                <div className="add-plus">+</div>
                                <button className="add-profile-btn" onClick={() => setIsModalOpen(true)}>Lisa profiil</button>

                            </div>
                            <ProfileModal
                                isOpen={isModalOpen}
                                onClose={() => setIsModalOpen(false)}
                                onSubmit={handleSubmit} 
                            />
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}

export default FindTeacher

import "./BecomeTeacher.css";
import {Link} from "react-router-dom";

const BecomeTeacher = () => {
  return (
    <main className="become-page">
      <section className="become-card">

        <h1 className="become-title">Tule õpetajaks</h1>

        <p className="become-intro">
          Otsime sõbralikke ja motiveerivaid juhendajaid, kes soovivad jagada
          oma teadmisi ning aidata õpilastel saavutada enesekindlust ja häid tulemusi.
        </p>

        <div className="become-section">
          <h2 className="become-subtitle">Mida meie pakume?</h2>
          <ul className="become-list">
            <li>Paindlik tunniplaan – sina valid oma tööajad.</li>
            <li>Õiglane tasu iga tunni eest.</li>
            <li>Toetav ja kaasaegne õpikeskkond.</li>
            <li>Võimalus õpetada onlines või kohapeal.</li>
          </ul>
        </div>

        <div className="become-section">
          <h2 className="become-subtitle">Nõuded kandidaadile</h2>
          <ul className="become-list">
            <li>Hea suhtlemisoskus ja kannatlikkus.</li>
            <li>Vähemalt kesktasemel ainealased teadmised.</li>
            <li>Oskus selgitada keerulist lihtsalt ja arusaadavalt.</li>
          </ul>
        </div>

        <div className="become-section">
          <h2 className="become-subtitle">Liitu meiega</h2>
          <p className="become-footer-text">
            Täida lühike ankeet ning võtame sinuga peagi ühendust.
          </p>
        </div>

        <div className="become-btn-row">
          <Link to={"/kandideeri"}><button className="become-button">Kandideeri</button></Link>
        </div>

      </section>
    </main>
  );
};

export default BecomeTeacher;

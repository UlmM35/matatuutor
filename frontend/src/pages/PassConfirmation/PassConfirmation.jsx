import "./PassConfirmation.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const PassConfirmation = () => {
  return (
    <main className="passconfirm-page">
      <section className="passconfirm-container">
        <div className="passconfirm-title">MataTuutor</div>

        <div className="passconfirm-text">
          Sinu e-mailile on saadetud juhised parooli taastamiseks
        </div>

        <div className="passconfirm-btn-row">
          <Link to="/login">
            <Button text="Logi sisse" size="very-large-btn" type="button" />
          </Link>
        </div>

        <div className="passconfirm-question">Ei saanud emaili?</div>

        <Link to="/unustasid" className="passconfirm-btn-row">
          <Button text="Saada uuesti" size="very-large-btn" type="button" />
        </Link>
      </section>
    </main>
  );
};

export default PassConfirmation;

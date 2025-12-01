import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./RecoverPassword.css";

const RecoverPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Kinnituskood saadetud e-mailile!");
  };

  return (
    <div className="recover-page">
      <div className="recover-box">
        <h1 className="recover-title">MataTuutor</h1>
        <p className="recover-subtitle">Parooli taastamine</p>

        <form onSubmit={handleSubmit} className="recover-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Sisestage oma email" />
          <Link to="/kinnitus" ><Button type={"submit"} size={"large-btn"} 
            text={"Saada kinnituskood emailile"}
          /></Link>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;

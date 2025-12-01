import "./Payment.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBooking } from "../../reducers/bookingReducer";
import paymentImg from "../../images/payment.png";
import Button from "../../components/Button/Button";

const Payment = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  const { teacher, duration, date  } = location.state || {}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await dispatch(createBooking({
      date: date,
      length: duration,
      teacher: teacher.id,
    }))

    if (success) {
      navigate("/")
    }
  }

  return (
    <main className="payment-page">
      <section className="payment-box">
        <h2 className="payment-title">Järgmised väljad on kohustuslikud</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Eesnimi" className="payment-input" />
          <input type="text" placeholder="Perekonnanimi" className="payment-input" />
          <input type="text" placeholder="Linn või maakond" className="payment-input" />

          <div className="payment-section">
            <label className="payment-label">Kaardi number</label>
            <input type="text" placeholder="1234 1234 1234 1234" className="payment-input" />
            <img src={paymentImg} alt="Kaarditüübid" className="payment-card-img" />
          </div>

          <div className="payment-row">
            <div className="payment-half">
              <label className="payment-label">Kehtiv kuni</label>
              <input type="text" placeholder="00 / 00" className="payment-input" />
            </div>
            <div className="payment-half">
              <label className="payment-label">CVC</label>
              <input type="text" placeholder="123" className="payment-input" />
            </div>
          </div>

          <div className="payment-btn-row">
            <Button text="Maksa" size="very-large-btn" type="submit" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Payment;

import "./Booking.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Booking = () => {
  const [selectedDuration, setSelectedDuration] = useState('2h')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
  const location = useLocation()

  const { teacher } = location.state || {}

  return (
    <main className="booking-page">
      <section className="booking-box">
        <form className="booking-form">
          <h2 className="booking-title">Broneeri õpetaja: {teacher.name}</h2>
            <div className="booking-show"> <strong>Õpetaja</strong>: {teacher.name}</div>
            <div className="booking-show"> <strong>Valdkond</strong>: {teacher.subject} </div>
            <div className="booking-show"> <strong>Vali kestvus</strong></div>
            <div className="radio-row">
              <label htmlFor="duration-1h">
                <input
                  id="duration-1h" 
                  type="radio" 
                  name="length" 
                  value="1h" 
                  checked={selectedDuration === '1h'} 
                  onChange={(e) => setSelectedDuration(e.target.value)} 
                  /> 1h
                </label>
                <label htmlFor="duration-2h">
                  <input
                    id="duration-2h" 
                    type="radio" 
                    name="length" 
                    value="2h" 
                    checked={selectedDuration === '2h'} 
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  /> 2h
              </label>
              <label htmlFor="duration-3h">
                <input
                  id="duration-3h" 
                  type="radio" 
                  name="length" 
                  value="3h" 
                  checked={selectedDuration === '3h'} 
                  onChange={(e) => setSelectedDuration(e.target.value)} 
                /> 3h
              </label>
            </div>
            <div className="choice"> <strong>Vali kuupäev</strong></div>
            <div className="radio-row">
              <label htmlFor="booking-date">
                <input
                  id="booking-date" 
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  max={
                    new Date(new Date().setMonth(new Date().getMonth() + 3))
                      .toISOString()
                      .split("T")[0]
                  }
                  onChange={(e) => setSelectedDate(e.target.value)} 
                  required
                />
              </label>
            </div>
            <div className="booking-show"> <strong>Hind:</strong> {teacher.price}</div>
          <Link to="/maksa" state={{ teacher: teacher, fromPage: 'booking', duration: selectedDuration, date: new Date(selectedDate).toLocaleDateString('et-EE')}} className="booking-btn-row">
            <Button text="Maksma" size="very-large-btn"/>
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Booking;
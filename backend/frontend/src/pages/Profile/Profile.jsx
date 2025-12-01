import "./Profile.css";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logOut } from "../../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { initializeBookings, deleteBooking} from "../../reducers/bookingReducer";

const Profile = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const user = useSelector(({ user }) => user)
  
  const bookings = useSelector(({ bookings }) => bookings)

  useEffect(() => {
    if (bookings.length === 0) {
      setLoading(true)
      dispatch(initializeBookings()).finally(() => setLoading(false))
    }
  }, [dispatch])

  if (loading) {
    return null
  }

  const handleDelete = (id) => {
    const remove = window.confirm(`Remove booking?`)
    if (remove) {
      dispatch(deleteBooking(id))
    }
  }

  const handleLogout = () => {
    dispatch(logOut())
    navigate("/login")
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Minu profiil</h1>
      <div className="profile-info">
        <p><strong>Nimi:</strong> {user.username}</p>
        <p><strong>Meiliaadress:</strong> {user.email}</p>
        <p><strong>Score:</strong> {user.score}</p>
        <div>
        <p><strong>Bookings:</strong></p>
        {bookings.map((b) => (
          <p key={b.id}>{b.date} {b.length} <strong>{b.teacher.name}</strong> <Button text={"Cancel"} size={"red-btn"} onClick={() => handleDelete(b.id)} /></p>
        ))}
      </div>
      </div>
      <button className="logout-button" onClick={handleLogout}>
          Logi välja
      </button>
    </div>
  );
};

export default Profile;

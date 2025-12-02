import "./Profile.css";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logOut, deleteUser } from "../../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { initializeBookings, deleteBooking} from "../../reducers/bookingReducer";

const Profile = () => {

  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteSuccessOpen, setDeleteSuccessOpen] = useState(false);

  const handleDeleteUser = () => {
    setConfirmDeleteOpen(true);
  };

  const confirmDeleteUser = () => {
    setConfirmDeleteOpen(false);
    setDeleteSuccessOpen(true);
  };

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
      <button className="delete-user-btn" onClick={handleDeleteUser}>
        Kustuta kasutaja
      </button>

      <button className="logout-button" onClick={handleLogout}>
          Logi välja
      </button>
      
      {confirmDeleteOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <p>Oled kindel, et soovid kasutaja kustutada?</p>
            <div className="popup-row">
              <button className="ok-btn" onClick={confirmDeleteUser}>OK</button>
              <button className="cancel-btn" onClick={() => setConfirmDeleteOpen(false)}>Tühista</button>
            </div>
          </div>
        </div>
      )}

    {deleteSuccessOpen && (
      <div className="popup-overlay">
        <div className="popup-box">
          <p>Sinu kasutaja on kustutatud</p>
          <div className="popup-row">
            <button
              className="ok-btn"
              onClick={() => {
                dispatch(deleteUser());
                navigate("/login");
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
)}

    </div>
  );
};

export default Profile;

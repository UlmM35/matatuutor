import "./App.css"
import { Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getUser } from "./reducers/userReducer"
import { getUsers } from "./reducers/usersReducer"
import { initializeTeachers } from "./reducers/teacherReducer"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Profile from "./pages/Profile/Profile"
import AboutUs from "./pages/AboutUs/AboutUs"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import RecoverPassword from "./pages/RecoverPassword/RecoverPassword"
import FindTeacher from "./pages/FindTeacher/FindTeacher"
import PassConfirmation from "./pages/PassConfirmation/PassConfirmation"
import TeacherProfile from "./pages/TeacherProfile/TeacherProfile"
import Payment from "./pages/Payment/Payment"
import KKK from "./pages/KKK/KKK"
import TermsAndPrivacy from "./pages/TermsAndPrivacy/TermsAndPrivacy"
import Contact from "./pages/Contact/Contact"
import BecomeTeacher from "./pages/BecomeTeacher/BecomeTeacher"
import AdminView from "./pages/AdminView/AdminView"
import Booking from "./pages/Booking/Booking"
import ScrollToTop from "./functions/ScrollToTop"
import Apply from "./pages/Apply/Apply"
import Leaderboard from "./pages/Leaderboard/Leaderboard"
import Score from "./pages/Score/Score"

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser()).finally(() => setLoading(false));
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeTeachers())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  
  const user = useSelector(({ user }) => user)

  if (loading) return null

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registreeri" element={<Register />} />
        <Route path="/unustasid" element={<RecoverPassword />} />
        <Route path="/kinnitus" element={<PassConfirmation />} />
      </Routes>
    )
  }

  return (
    <div className="App">
      <Navbar />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/leia" element={<FindTeacher />}/>
        <Route path="/meist" element={<AboutUs />}/>
        <Route path="/loe-rohkem" element={<About />}/>
        <Route path="/profiil" element={<Profile />} />
        <Route path="/teacher/:name" element={<TeacherProfile />} />
        <Route path="/faq" element={<KKK />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/maksa" element={<Payment />} />
        <Route path="/privacy" element={<TermsAndPrivacy />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/tule-opetajaks" element={<BecomeTeacher />} />
        <Route path="/kandideeri" element={<Apply />} />
        <Route path="/edetabel" element={<Leaderboard />} />
        <Route path="/skoor" element={<Score />} />
        {user.role === "admin" ? <Route path="/admin" element={<AdminView />} /> : null}
      </Routes>

      <Footer />
    </div>
  )
}

export default App

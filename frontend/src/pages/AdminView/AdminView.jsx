import "./AdminView.css";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../reducers/usersReducer";


const AdminView = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers()).finally(() => setLoading(false))
    }, [dispatch])

    const users = useSelector(({ users }) => users)

    const teachersLength = useSelector(({ teachers}) => teachers).length

    const { topBooker, topScorers, topVisitor } = useMemo(() => {
        if (users.length === 0) {
            return { topBooker: null, topScorers: null, topVisitor: null }
        }

        const sortedByBookings = [...users].sort((a, b) => (b.bookingAmount || 0) - (a.bookingAmount || 0))
        const sortedByScore = [...users].sort((a, b) => (b.score || 0) - (a.score || 0))
        const sortedByVisits = [...users].sort((a, b) => (b.visits || 0) - (a.visits || 0))

        return {
            topBooker: sortedByBookings,
            topScorers: sortedByScore,
            topVisitor: sortedByVisits[0]
        }
    }, [users])

    if (loading) {
        return null
    }

    return (

        <div className="admin-dashboard">
            <div className="admin-box" id="box_admin">
            <div className="main-cards">
                <div className="card_2">
                    <h2>Õpetajaid kokku</h2>
                    <p className="number">{teachersLength}</p>
                </div>
                <div className="card_2">
                    <h2>Kasutajaid kokku</h2>
                    <p className="number">{users.length}</p>
                </div>
                <div className="card_2">
                    <h2>Külastusi kokku</h2>
                    <p className="number">{users.reduce((acc, curr) => acc + (curr.visits || 0), 0)}</p>
                </div>
                <div className="card_2">
                    <h2>Broneerimisi kokku</h2>
                    <p className="number">{users.reduce((acc, curr) => acc + (curr.bookingAmount || 0), 0)}</p>
                </div>
            </div>

            <div className="right-panel">
                <div className="sub-cards-section">
                    <h2>Broneeringud/Külastamised</h2>
                </div>
                <div className="sub-cards">
                    <div className="sub-card">
                        <h3>Kõige rohkem broneerinud:</h3>
                        <p className="number_2">{topBooker[0].username}</p>
                    </div>
                    <div className="sub-card">
                        <h3>Teine suurim broneerija:</h3>
                        <p className="number_2">{topBooker[1].username}</p>
                    </div>
                    <div className="sub-card">
                        <h3>Kõige rohkem külastanud:</h3>
                        <p className="number_2">{topVisitor.username}</p>
                    </div>
                </div>

                <div className="sub-cards-section">
                    <h2>Skoor</h2>
                </div>
                <div className="sub-cards">
                    <div className="sub-card">
                        <h3>Kõige suurem skoor:</h3>
                        <p className="number">{topScorers[0].username}</p>
                    </div>
                    <div className="sub-card">
                        <h3>Teine kõige suurem skoor:</h3>
                        <p className="number">{topScorers[1].username}</p>
                    </div>
                    <div className="sub-card">
                        <h3>Kolmas kõige suurem skoor:</h3>
                        <p className="number">{topScorers[2].username}</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
    )
}

export default AdminView;

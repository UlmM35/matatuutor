import "./Leaderboard.css"
import Button from "../../components/Button/Button"
import { getUsers } from "../../reducers/usersReducer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Leaderboard = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const users = useSelector(({ users }) => users)

  const sortedUsers = [...users].sort((a, b) => b.score - a.score)

  return (
    <main className="leader-page">
      <section className="leader-box">
        <h2 className="leader-title">Edetabel</h2>
        <div className="leaderboard-list">
          {sortedUsers.map((user, index) => (
            <div key={user.id} className="leaderboard-item">
              <span className="leaderboard-rank">#{index + 1}</span>
              <span className="leaderboard-username">{user.username}</span>
              <span className="leaderboard-score">{user.score}</span>
            </div>
          ))}
        </div>
        <Link to="/skoor"className="leader-btn-row">
          <Button text="Suurenda skoori!" size="very-large-btn" type="submit" />
        </Link>
      </section>
    </main>
  )
}

export default Leaderboard

import React, { useState, useEffect } from "react";

export default function LeaderBoard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function LoadScores() {
      const scoreURL = `${process.env.REACT_APP_AOP_USER_SERVICE_API_HOST}/scores`;
      const response = await fetch(scoreURL);
      if (response.ok) {
        const data = await response.json();
        setScores(data.scores);
      }
    }
    LoadScores();
  }, []);

  return (
    <div>
      <h1>Player Scores</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score) => {
            return (
              <tr key={score.id}>
                <td>{score.username}</td>
                <td>{score.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

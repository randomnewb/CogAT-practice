import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function QuizSelect() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
      </div>
      <div className="container">
        <h3>Select a Quiz</h3>
      </div>
      <div className="container">
        <button
          onClick={() => {
            history.push("/quiz");
          }}
        >
          Quick Quiz
        </button>
        <button>Custom Quiz</button>
      </div>
    </>
  );
}

export default QuizSelect;

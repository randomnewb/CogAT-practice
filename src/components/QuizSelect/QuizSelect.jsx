import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

/**
 * allow the user to confirm their selection before starting the quiz
 * or cancels the quiz
 */

function QuizSelect() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  function confirmQuiz() {
    let confirm = window.confirm("Are you sure you want to start the quiz?");

    if (confirm) {
      history.push("/quiz");
    } else {
      history.push("/user");
    }
  }

  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
      </div>
      <div className="container">
        <h3>Select a Quiz</h3>
      </div>
      <div className="container">
        <img
          src="https://res.cloudinary.com/dartlv0ee/image/upload/v1678664525/images/fast-forward-button_tqs3us.png"
          alt="Quick Quiz Button"
          style={{ width: "100px", height: "100px" }}
          onClick={() => {
            confirmQuiz();
          }}
        />
        <br />
        <img
          src="https://res.cloudinary.com/dartlv0ee/image/upload/v1678664525/images/gears_1_fgqyqu.png"
          alt="Custom Quiz Button"
          style={{ width: "100px", height: "100px" }}
          // onClick={() => {
          //   history.push("/quiz");
          // }}
        />
      </div>
    </>
  );
}

export default QuizSelect;

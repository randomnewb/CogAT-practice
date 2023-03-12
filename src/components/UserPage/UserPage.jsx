import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const questions = [
  {
    id: 1,
    questionText: "Which shape is a square?",
    answerOptions: [
      {
        id: 1,
        answerText: "Diamond",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678655473/images/diamonds_q445ri.png",
      },
      {
        id: 2,
        answerText: "Heart",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678655473/images/hearts_1_ze3k7t.png",
      },
      {
        id: 3,
        answerText: "Square",
        isCorrect: true,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678655473/images/plain-square_yf7rc6.png",
      },
      {
        id: 4,
        answerText: "Circle",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678655473/images/plain-circle_troipq.png",
      },
    ],
  },
  {
    id: 2,
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { id: 1, answerText: "Jeff Bezos", isCorrect: false },
      { id: 2, answerText: "Elon Musk", isCorrect: true },
      { id: 3, answerText: "Bill Gates", isCorrect: false },
      { id: 4, answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { id: 1, answerText: "Apple", isCorrect: true },
      { id: 2, answerText: "Intel", isCorrect: false },
      { id: 3, answerText: "Amazon", isCorrect: false },
      { id: 4, answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { id: 1, answerText: "1", isCorrect: false },
      { id: 2, answerText: "4", isCorrect: false },
      { id: 3, answerText: "6", isCorrect: false },
      { id: 4, answerText: "7", isCorrect: true },
    ],
  },
];

function UserPage() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="container">
        <h2>Welcome, {user.username}!</h2>
      </div>
      <div className="container">
        <h3>Quick Quiz</h3>
      </div>
      <div className="container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <>
                  <br />
                  <img
                    onMouseOver={(e) =>
                      (e.currentTarget.style.border = "5px solid red")
                    }
                    onMouseOut={(e) => (e.currentTarget.style.border = "")}
                    src={answerOption.image}
                    alt={answerOption.answerText}
                    style={{ width: "100px", height: "100px" }}
                    key={answerOption.id}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  />
                </>
              ))}
            </div>
          </>
        )}
      </div>
      {showScore && (
        <div className="container">
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setShowScore(false);
              setScore(0);
              history.push("/user");
            }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </>
  );
}

export default UserPage;

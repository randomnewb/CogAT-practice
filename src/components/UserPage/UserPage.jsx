import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@mui/material/styles";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const questions = [
  {
    id: 1,
    questionText: "Which shape is a square?",
    questionExplanation:
      "A square is a shape with four equal sides and four right angles.",
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
    questionText: "What food would be the least healthy?",
    questionExplanation: "Cake is the least healthy food.",
    answerOptions: [
      {
        id: 1,
        answerText: "Banana",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678657708/images/banana_1_embzm1.png",
      },
      {
        id: 2,
        answerText: "Cake",
        isCorrect: true,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678657708/images/cake-slice_wjpfer.png",
      },
      {
        id: 3,
        answerText: "Apple",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678657708/images/shiny-apple_1_yud2lx.png",
      },
      {
        id: 4,
        answerText: "Grapes",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1678657708/images/grapes_1_uxno9k.png",
      },
    ],
  },
  {
    id: 3,
    questionText: "Which answer has the most toys?",
    questionExplanation:
      "The answer with the most toys has 9 toys in the picture. The other answers have less than 9 toys.",
    answerOptions: [
      {
        id: 1,
        answerText: "9",
        isCorrect: true,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680658455/images/09_meeple_qqlti3.png",
      },
      {
        id: 2,
        answerText: "8",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680658455/images/08_meeple_nkgdqi.png",
      },
      {
        id: 3,
        answerText: "7",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680658455/images/07_meeple_ffmqk9.png",
      },
      {
        id: 4,
        answerText: "6",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680658455/images/06_meeple_ylscfp.png",
      },
    ],
  },
  {
    id: 4,
    questionText: "Which answer is the best match?",
    supplement_1:
      "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659124/images/seedling_bmtjn5.png",
    supplement_a:
      "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659777/images/plain-arrow-right_sabipw.png",
    supplement_2:
      "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659124/images/sun_jxxjyn.png",
    supplement_3:
      "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659124/images/city-car_ipzyzp.png",
    supplement_b:
      "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659777/images/plain-arrow-right_sabipw.png",
    supplement_4:
      "https://res.cloudinary.com/dartlv0ee/image/upload/v1680663765/images/plain-square_kzyeys.png",
    questionExplanation:
      "The best answer is the gasoline pump because the car needs gasoline to run just like a plant needs the sun to grow.",
    answerOptions: [
      {
        id: 1,
        answerText: "teapot",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659124/images/teapot_lwdffm.png",
      },
      {
        id: 2,
        answerText: "flag",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659124/images/flying-flag_xf08id.png",
      },
      {
        id: 3,
        answerText: "duck",
        isCorrect: false,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659124/images/duck_unchlq.png",
      },
      {
        id: 4,
        answerText: "gasoline pump",
        isCorrect: true,
        image:
          "https://res.cloudinary.com/dartlv0ee/image/upload/v1680659124/images/gas-pump_p8qj2v.png",
      },
    ],
  },
];

function UserPage() {
  const history = useHistory();
  // const user = useSelector((store) => store.user);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answerChosen, setAnswerChosen] = useState(false);

  const storeAnswer = (id) => {
    setAnswer(id);
  };

  const showExplanation = () => {
    setAnswerChosen(true);
  };

  const chooseAnswer = () => {
    const isCorrect = questions[currentQuestion].answerOptions.find(
      (answerOption) => answerOption.id === answer
    ).isCorrect;

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }

    setAnswerChosen(false);
  };

  const enableMouseEvents = () => {
    const answerOptions = document.querySelectorAll(".answerOption");
    answerOptions.forEach((answerOption) => {
      answerOption.style.pointerEvents = "auto";
    });
  };

  const disableMouseEvents = () => {
    const answerOptions = document.querySelectorAll(".answerOption");
    answerOptions.forEach((answerOption) => {
      answerOption.style.pointerEvents = "none";
    });
  };

  const selectedOutline = {
    outline: "skyblue solid 4px",
  };

  const hoverOutline = {
    outline: "orange solid 4px",
  };

  const changeLastQuestionButton = (questions, currentQuestionIndex) => {
    if (currentQuestionIndex === questions.length - 1) {
      return "Finish Quiz";
    } else {
      return "Next Question";
    }
  };

  return (
    <>
      <div className="container">
        <Typography variant="h3">Quick Quiz</Typography>
        <br />
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <Typography variant="h5">
                  Question {currentQuestion + 1}/{questions.length}
                </Typography>
              </div>
              <br />
              <div className="question-text">
                <Typography variant="h5">
                  {questions[currentQuestion].questionText}
                </Typography>
              </div>
              {questions[currentQuestion].supplement_1 ? (
                <div className="question-supplement">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={questions[currentQuestion].supplement_1}
                    alt=""
                  />
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={questions[currentQuestion].supplement_a}
                    alt=""
                  />
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={questions[currentQuestion].supplement_2}
                    alt=""
                  />
                  <br />
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={questions[currentQuestion].supplement_3}
                    alt=""
                  />
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={questions[currentQuestion].supplement_b}
                    alt=""
                  />
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={questions[currentQuestion].supplement_4}
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <br />
            <div
              className="answer-section"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 100px)",
                gap: "10px",
              }}
            >
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <>
                  <img
                    onMouseOver={(e) => {
                      if (e.target.style.outline !== selectedOutline.outline) {
                        e.target.style.outline = hoverOutline.outline;
                      }
                    }}
                    onMouseOut={(e) => {
                      if (e.target.style.outline !== selectedOutline.outline) {
                        e.target.style.outline = "none";
                      }
                    }}
                    src={answerOption.image}
                    alt={answerOption.answerText}
                    style={{
                      width: "100px",
                      height: "100px",
                      outlineOffset: "-4px",
                    }}
                    key={answerOption.id}
                    className="answerOption"
                    onClick={(e) => {
                      storeAnswer(answerOption.id);
                      e.target.style.outline = selectedOutline.outline;

                      for (
                        let i = 0;
                        i < e.target.parentNode.children.length;
                        i++
                      ) {
                        if (e.target.parentNode.children[i] !== e.target) {
                          e.target.parentNode.children[i].style.outline =
                            "none";
                        }
                      }
                    }}
                  />
                </>
              ))}
            </div>

            <br />

            {!answerChosen && (
              <Button
                variant="contained"
                color="primary"
                style={{
                  margin: "10px",
                  width: "200px",
                }}
                disabled={!answer}
                onClick={() => {
                  showExplanation();
                  disableMouseEvents();
                }}
              >
                Choose Answer
              </Button>
            )}

            {answerChosen && (
              <div className="question-explanation">
                {questions[currentQuestion].answerOptions.find(
                  (answerOption) => answerOption.id === answer
                ).isCorrect ? (
                  <div>
                    <h3>Great job!</h3>
                    <br />
                  </div>
                ) : (
                  <div>
                    <h3>You almost got the right answer.</h3>
                    <br />
                  </div>
                )}

                {questions[currentQuestion].questionExplanation}

                <br />
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    margin: "10px",
                    width: "200px",
                  }}
                  onClick={() => {
                    chooseAnswer();

                    for (
                      let i = 0;
                      i <
                      document.getElementsByClassName("answer-section")[0]
                        .children.length;
                      i++
                    ) {
                      document.getElementsByClassName(
                        "answer-section"
                      )[0].children[i].style.outline = "none";
                    }

                    setAnswer("");
                    enableMouseEvents();
                  }}
                >
                  {answerChosen
                    ? changeLastQuestionButton(questions, currentQuestion)
                    : "Show Explanation"}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
      {showScore && (
        <div className="container">
          <Button
            variant="contained"
            color="primary"
            style={{
              margin: "10px",
              width: "200px",
            }}
            onClick={() => {
              setCurrentQuestion(0);
              setShowScore(false);
              setScore(0);
              history.push("/user");
            }}
          >
            Restart Quiz
          </Button>
        </div>
      )}
    </>
  );
}

export default UserPage;

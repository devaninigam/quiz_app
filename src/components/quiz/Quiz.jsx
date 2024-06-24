import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import Cookies from "js-cookie";
import QuizMarks from "./QuizMarks";

function Quiz() {
  const UserName = Cookies.get("username");
  const [quiz, setQuiz] = useState([]); // State to store quiz questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question index
  const [answers, setAnswers] = useState([]); // Track user answers
  const [storeValue, setStoreValue] = useState([]); // Track selected option values
  const [statusForShow, setStatusForShow] = useState(true); // Show quiz or results
  const [timeForQuiz, setTimeForQuiz] = useState(30); // Timer for each question
  const [ansForFilter, setAnsForFilter] = useState([]); // Store correct answers 

  // Fetch quiz data on component mount
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/quiz");
        setQuiz(res.data);
        setAnswers(new Array(res.data.length).fill(null));
        setStoreValue(new Array(res.data.length).fill(null));

        // Store correct answers
        res.data.forEach(question => setAnsForFilter(prev => [...prev, question.ans]));
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchQuizData();
  }, []);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeForQuiz(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Move to next question when time runs out
  useEffect(() => {
    if (timeForQuiz === 0) {
      handleNextQuestion();
      setTimeForQuiz(30);
    }
  }, [timeForQuiz]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeForQuiz(30);
    }
  };

  const handleAnswerSelection = (e, optionIndex) => {
    const { value } = e.target;

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(updatedAnswers);

    const updateValue = [...storeValue];
    updateValue[currentQuestionIndex] = value;
    setStoreValue(updateValue);
  };

  const handleSubmitQuiz = () => {
    setStatusForShow(false);
  };

  // Skip Quiz 
  const skipQuiz = () => {
    if (statusForShow) {
      setStatusForShow(false);
    } else {
      Cookies.remove("id");
      Cookies.remove("username");
      location.reload("/");
    }

  }

  // Filter correct answers
  const storeAndFilterValue = storeValue.filter((item, index) => item === ansForFilter[index]);

  const progressBarLine = quiz.length ? (storeAndFilterValue.length * 100) / quiz.length : 0;



  return (
    <>
      <div className="d-flex justify-content-end logOut">
        <button onClick={skipQuiz} className="button skip-button px-5 py-2 mt-2 mx-2">
        {statusForShow ? "Skip this quiz": "Logout"}
        </button>

      </div>
      <div className="Quiz">



        {statusForShow ? (
          <div className="quiz-container" id="quiz">
            <div className="d-flex align-items-center justify-content-end">
              <span className="fs-6">
                (1 Point) You have {timeForQuiz} seconds to complete this quiz.
              </span>
            </div>
            {quiz.length > 0 && (
              <div className="quiz-header">
                <h4>{currentQuestionIndex + 1} </h4>
                <h2>{quiz[currentQuestionIndex].question}</h2>
                <ul>
                  {quiz[currentQuestionIndex].option.map((option, idx) => (
                    <li key={idx}>
                      <input
                        type="radio"
                        name={`answer${currentQuestionIndex}`}
                        id={`answer${currentQuestionIndex}_${idx}`}
                        className="answer"
                        onChange={(e) => handleAnswerSelection(e, idx)}
                        checked={answers[currentQuestionIndex] === idx}
                        value={option}
                      />
                      <label htmlFor={`answer${currentQuestionIndex}_${idx}`}>
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="navigation-buttons">
              {currentQuestionIndex !== quiz.length - 1 ? (
                <button onClick={handleNextQuestion}>Next</button>
              ) : (
                <button onClick={handleSubmitQuiz}>Submit</button>
              )}
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <span className="fs-6 ">{quiz.length} questions answered</span>
            </div>
          </div>
        ) : (
          <QuizMarks
            UserName={UserName}
            storeAndFilterValue={storeAndFilterValue}
            quiz={quiz}
            progressBarLine={progressBarLine}
          />
        )}
      </div>
    </>
  );
}

export default Quiz;

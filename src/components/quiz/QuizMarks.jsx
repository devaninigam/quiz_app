import React from 'react'

function QuizMarks({UserName , storeAndFilterValue , quiz , progressBarLine }) {
  return (
    <div className="quiz-container " style={{ padding: "40px" }}>
    <div className="quiz-header">
      <h2 align="center">
        {UserName} is that :- {storeAndFilterValue.length} / {quiz.length}
      </h2>
      <div className="navigation-buttons d-flex align-items-center justify-content-center  ">
        <div className="progress">
          <div
            className="progress-value d-flex align-items-center justify-content-center fs-6"
            style={{ width: `${progressBarLine}%` }}
          > {progressBarLine}% </div>
        </div>
      </div>
    </div>
  </div>
  ) 
}

export default QuizMarks
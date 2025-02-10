import React, { useState } from "react";

const QuizCreator = ({ setQuiz }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(0);

  const Question = () => {
    setQuestions([...questions, { question, options, correct }]);
    setQuestion("");
    setOptions(["", "", "", ""]);
  };

  const createQuiz = () => {
    setQuiz(questions);
  };

  return (
    <div className="quiz-Container">
      <h2>Create Quiz</h2>
      
      <input className="input-style" type="text" placeholder="Write a Question" value={question} onChange={(e) => setQuestion(e.target.value)}/>
      {options.map((option, index) => (
        
        <input className="input-style" key={index} type="text" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => {
            const newOptions = [...options];
            newOptions[index] = e.target.value;
            setOptions(newOptions);
          }}
        />
      ))}
      <select className="input-style" value={correct} onChange={(e) => setCorrect(Number(e.target.value))}>
        {options.map((_, index) => (
          <option key={index} value={index}>
            Correct Option: {index + 1}
          </option>
        ))}
      </select>
      {/* <button onClick={Question}>Add Question</button> */}
      <button onClick={Question}><span class="btn2"><span class="spn2">Add Question</span></span></button>
      <button onClick={createQuiz}><span class="btn2"><span class="spn2">Start Quiz</span></span></button>
      {/* <button onClick={createQuiz}>Start Quiz</button> */}
    </div>
  );
};

export default QuizCreator;


// import React, { useState, useEffect } from "react";

// const QuizTaker = ({ quiz, setScore }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(30);

//   useEffect(() => {
//     const timer = setInterval(() => setTimeLeft((prev) => Math.max(0, prev - 1)), 1000);
//     if (timeLeft === 0) nextQuestion();
//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleAnswer = (answer) => {
//     setUserAnswers([...userAnswers, answer]);
//     nextQuestion();
//   };

//   const nextQuestion = () => {
//     if (currentIndex < quiz.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setTimeLeft(30);
//     } else {
//       calculateScore();
//     }
//   };

//   const calculateScore = () => {
//     const score = userAnswers.reduce(
//       (total, answer, index) => (answer === quiz[index].correct ? total + 1 : total),
//       0
//     );
//     setScore(score);
//   };

//   return (
//     <div className="quiz-taker">
//       <h2>Take Quiz</h2>
//       <p>Time Left: {timeLeft}s</p>
//       <h3>{quiz[currentIndex].question}</h3>
//       {quiz[currentIndex].options.map((option, index) => (
//         <button className="btn2" key={index} onClick={() => handleAnswer(index)}>
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default QuizTaker;



import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm(props) {
  const initContact = {
    id: null,
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  };

  const [userState, setUserState] = useState(initContact);

  const handleUserChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userState.userFirstname || !userState.userLastname || !userState.userPhone) return;
    props.addUser(userState);
    setUserState(initContact);
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input style={style.form.inputs} className="userFirstname" name="userFirstname" type="text" value={userState.userFirstname} onChange={handleUserChange} />
      <br />
      <label>Last name:</label>
      <br />
      <input style={style.form.inputs} className="userLastname" name="userLastname" type="text" value={userState.userLastname} onChange={handleUserChange} />
      <br />
      <label>Phone:</label>
      <br />
      <input style={style.form.inputs} className="userPhone" name="userPhone" type="text" value={userState.userPhone} onChange={handleUserChange} />
      <br />
      <input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" />
    </form>
  );
}

function InformationTable(props) {
  const sortedContacts = props.users.sort((a, b) => a.userLastname.localeCompare(b.userLastname));

  const display =
    sortedContacts.length > 0 ? (
      sortedContacts.map((user, index) => (
        <tr key={index}>
          <td style={style.tableCell}>{user.userFirstname}</td>
          <td style={style.tableCell}>{user.userLastname}</td>
          <td style={style.tableCell}>{user.userPhone}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>&nbsp;</td>
      </tr>
    );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>{display}</tbody>
    </table>
  );
}

function Application(props) {
  const usersObj = [];

  const [users, setUsers] = useState(usersObj);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <section>
      <PhoneBookForm addUser={addUser} />
      <InformationTable users={users} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
// @prestonbourne
// prestonbourne commented on Jun 13, 2022
// I had a code byte assessment with this just yesterday, as soon as I finished I saw someone do it in ten minutes. I on the other hand...took 5 hours.

// @gfox1984
// gfox1984 commented on Jul 27, 2022
// Thanks for this gist, it makes it very easy for me to see which of my candidates are cheating :D

// @yeuditspiner
// yeuditspiner commented on Feb 15, 2023
// thanks about the solution,
// can you put here the question?

// @dearguru07
// Comment
 
// Leave a comment
 
// Footer
// © 2025 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact
// Manage cookies
// Do not share my personal information

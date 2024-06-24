import { Route, Routes ,Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Quiz from "./components/quiz/Quiz";
import Cookies from "js-cookie";
import Register from "./components/login/Register";

function App() {
  const id = Cookies.get("id");
  return (
    <Routes>
      {!id ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Quiz />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
}

export default App;

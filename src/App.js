import "./App.css";
import { Route, Routes } from "react-router";
import Quiz from "./pages/Quiz";
import Contact from "./pages/Contact";
import HeaderLogin from "./components/HeaderLogin";
import LoginForm from "./components/LoginForm";
import ListQuiz from "./pages/ListQuiz";
import Header from "./components/Header";

function App() {
  return (
    <>
      <HeaderLogin></HeaderLogin>
      <Routes>
      <Route element={<LoginForm></LoginForm>} path="/"></Route>
        <Route element={<LoginForm></LoginForm>} path="/home"></Route>
        <Route element={<Quiz></Quiz>} path="/Quiz"></Route>
        <Route element={<Contact></Contact>} path="/Contact"></Route>
        <Route element={<ListQuiz></ListQuiz>} path="/listquiz"></Route>
      </Routes>
    </>
  );
}

export default App;

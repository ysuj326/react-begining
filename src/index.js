import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// import App from "./App";  // 1. useEffect 사용법
// import Todos from "./pages/todos/Todos"; // 2. ToDo 리스트 만들기
// import Coins from "./pages/coins/Coins"; // 3. Coin 변환
import MovieHome from "./pages/movie/Home"; // 4. Movie 변환
import MovieDetail from "./pages/movie/Detail"; // 4. Movie 변환

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <App />
  // <Todos />
  // <Coins />
  <Router>
    <Routes>
      <Route path="/" element={<MovieHome />}></Route>
      <Route path="/movie" element={<MovieHome />}></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
    </Routes>
  </Router>

  //  App.js render 두번 일어남
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

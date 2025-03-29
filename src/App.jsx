import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Link import 추가
import Mypage from "./Components/Mypage/Mypage"; // Mypage 컴포넌트 불러오기
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* 메인 페이지와 마이페이지로 이동할 수 있는 링크 
            임시라 메인 병합시 삭제될 예정            */}
        <Link to="/">메인 페이지</Link>
        <Link to="/mypage">마이페이지</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>메인 페이지</h1>} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

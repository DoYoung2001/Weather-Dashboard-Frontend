import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import Sidebar from "../Sidebar/Sidebar";
import AlertSettings from "./AlertSettings";
import styles from "./Mypage.module.css";

const Mypage = () => {
  // 사용자 정보 상태 관리
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    email: "",
    password: "********", // 보안상 기본적으로 비밀번호는 숨김 처리
    joinDate: "",
  });

  // 알림 설정 상태 관리
  const [weatherAlert, setWeatherAlert] = useState(true);
  const [specialAlert, setSpecialAlert] = useState(false);

  // 더미 데이터를 불러와 초기 사용자 정보 설정 (백엔드 연동 전 임시 데이터)
  useEffect(() => {
    const dummyData = {
      name: "홍길동",
      id: "hong123",
      email: "hong123@example.com",
      password: "********",
      joinDate: "2024-01-01",
    };
    setUserInfo(dummyData);
  }, []);

  return (
    <div className={styles["app-container"]}>
      {/* 사이드바 추가 */}
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>

      {/* 마이페이지 영역 */}
      <div className={styles.mypageContainer}>
        <section className={styles.subjectSection}>
          <h2>마이페이지</h2>
        </section>

        {/* 사용자 정보 표시 및 수정 */}
        <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />

        {/* 알림 설정 */}
        <AlertSettings
          weatherAlert={weatherAlert}
          setWeatherAlert={setWeatherAlert}
          specialAlert={specialAlert}
          setSpecialAlert={setSpecialAlert}
        />
      </div>
    </div>
  );
};

export default Mypage;

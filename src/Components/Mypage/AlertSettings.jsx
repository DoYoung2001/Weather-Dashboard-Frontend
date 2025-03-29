import React from "react";
import styles from "./Mypage.module.css";

// 토글 스위치 컴포넌트
const ToggleSwitch = ({ isOn, handleToggle }) => (
  <button
    className={`${styles.toggleSwitch} ${isOn ? styles.on : styles.off}`}
    onClick={handleToggle}
    aria-pressed={isOn}
  >
    <span className={styles.slider}></span>
  </button>
);

// 알림 설정 컴포넌트
const AlertSettings = ({
  weatherAlert,
  setWeatherAlert,
  specialAlert,
  setSpecialAlert,
}) => {
  return (
    <section className={styles.alertSection}>
      <div className={styles.alertHeader}>
        <h3>알림 설정</h3>
      </div>
      <div className={styles.alertContent}>
        <strong>날씨 알림</strong>
        <ToggleSwitch
          isOn={weatherAlert}
          handleToggle={() => setWeatherAlert(!weatherAlert)}
        />

        <strong>기상특보 알림</strong>
        <ToggleSwitch
          isOn={specialAlert}
          handleToggle={() => setSpecialAlert(!specialAlert)}
        />
      </div>
    </section>
  );
};

export default AlertSettings;

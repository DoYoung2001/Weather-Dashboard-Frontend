import React from "react";
import styles from "./WeatherMap.module.css";

function WeatherMap() {
  return (
    <div className={styles["weather-card"] + " " + styles["weather-map"]}>
      <h2 className={styles["card-title"]}>기타 날씨</h2>

      <div className={styles["tabs-container"]}>
        <div className={styles.tabs}>
          <button className={`${styles["tab-btn"]} ${styles.active}`}>
            비
          </button>
          <button className={styles["tab-btn"]}>미세먼지</button>
          <button className={styles["tab-btn"]}>태풍</button>
          <button className={styles["tab-btn"]}>전국날씨</button>
        </div>

        <div className={styles["tab-content"]}>
          {/* 탭 컨텐츠는 비어있음 */}
        </div>
      </div>
    </div>
  );
}

export default WeatherMap;

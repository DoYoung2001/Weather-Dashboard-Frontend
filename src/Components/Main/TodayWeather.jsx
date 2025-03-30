import React from "react";
import styles from "./TodayWeather.module.css"; // CSS 모듈 적용

function TodayWeather() {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 | ${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className={`${styles["weather-card"]} ${styles["today-weather"]}`}>
      <div className={styles["card-header"]}>
        <h2 className={styles["card-title"]}>오늘의 날씨</h2>
      </div>

      <div className={styles["location-info"]}>
        <span className={styles["location-icon"]}>📍</span>
        <span className={styles["location-name"]}>서울시 날씨</span>
      </div>

      <div className={styles["date-info"]}>{formattedDate}</div>

      <div className={styles["current-weather-display"]}>
        <div className={styles["weather-icon-large"]}>
          <span className={styles["cloud-icon"]}>☁️</span>
        </div>
        <div className={styles["temperature-large"]}>-6°</div>
        <div className={styles["temp-range"]}>
          <span className={styles["high-temp"]}>↑ 2°</span>
          <span className={styles["low-temp"]}>↓ -10°</span>
        </div>
      </div>

      <div className={styles["weather-description"]}>
        <div className={styles["weather-status"]}>오늘</div>
        <div className={styles["weather-detail"]}>
          하늘에는 구름이 많아요
          <br />
          체감온도 -7°
        </div>
      </div>

      <div className={styles["weather-metrics"]}>
        <div className={styles["metric-item"]}>
          <div className={styles["metric-icon"]}>🌡️</div>
          <div className={styles["metric-value"]}>-5.6°</div>
        </div>
        <div className={styles["metric-item"]}>
          <div className={styles["metric-icon"]}>💧</div>
          <div className={styles["metric-value"]}>53%</div>
        </div>
        <div className={styles["metric-item"]}>
          <div className={styles["metric-icon"]}>🌬️</div>
          <div className={styles["metric-value"]}>1.8m/s</div>
        </div>
        <div className={styles["metric-item"]}>
          <div className={styles["metric-icon"]}>🌧️</div>
          <div className={styles["metric-value"]}>1mm</div>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;

import React from "react";
import styles from "./WeatherNews.module.css"; // CSS 모듈 적용

function WeatherNews() {
  return (
    <div className={`${styles["weather-card"]} ${styles["weather-news"]}`}>
      <h2 className={styles["card-title"]}>날씨 뉴스</h2>

      <div className={styles["news-content-empty"]}>
        {/* 뉴스 컨텐츠는 비어있음 (이미지에서 비어있음) */}
      </div>
    </div>
  );
}

export default WeatherNews;

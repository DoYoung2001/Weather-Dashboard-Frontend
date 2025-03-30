import React from "react";
import styles from "./LocationSearch.module.css"; // CSS 모듈 적용

function LocationSearch() {
  return (
    <div className={`${styles["weather-card"]} ${styles["location-search"]}`}>
      <h2 className={styles["card-title"]}>지역 검색</h2>

      <div className={styles["content-empty"]}>{/* 비어있음 */}</div>
    </div>
  );
}

export default LocationSearch;

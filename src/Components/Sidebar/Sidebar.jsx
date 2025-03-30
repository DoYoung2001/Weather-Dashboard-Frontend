import React from "react";
import styles from "./Sidebar.module.css";
import ProfileImage from "../assets/profile-image.png";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles["profile-section"]}>
        <img
          src={ProfileImage}
          alt="프로필"
          className={styles["profile-image"]}
        />
        <div className={styles["profile-info"]}>
          <div className={styles["profile-name"]}>꼬돌이</div>
          <div className={styles["profile-status"]}>
            <span className={styles["status-badge"]}>오프라인</span>
          </div>
        </div>
      </div>

      <div className={styles["weather-info"]}>
        <div className={styles["weather-location"]}>
          <div className={styles["location-label"]}>
            서울특별시 용산구 남영동
          </div>
          <div className={styles["weather-alert"]}>
            <span className={styles["alert-badge"]}>
              해당 지역에 강한 추위 발령중
            </span>
          </div>
        </div>
      </div>

      <div className={styles["sidebar-section"]}>
        <div className={styles["section-header"]}>
          <span className={styles["section-icon"]}>✓</span>
          <span className={styles["section-title"]}>오늘의 추천</span>
        </div>
        <div className={styles["section-content"]}>
          <div className={styles["recommendation-box"]}>
            <span className={styles["recommendation-icon"]}>📊</span>
            <div className={styles["recommendation-text"]}>
              <div>특수지대 보자보자보자 보자보자</div>
              <div className={styles["recommendation-subtext"]}>
                특보보고 이사온 4 지역민
              </div>
            </div>
          </div>

          <div className={styles["sidebar-section"]}>
            <div className={styles["section-header"]}>
              <span className={styles["section-icon"]}>✓</span>
              <span className={styles["section-title"]}>현재 지역 날씨</span>
            </div>
            <div className={styles["current-weather"]}>
              <div className={styles["weather-location-small"]}>
                서울특별시 강남구
              </div>
              <div className={styles["weather-display"]}>
                <div className={styles["weather-cloud-icon"]}>☁️</div>
                <div className={styles["weather-temp"]}>-6°</div>
              </div>
              <div className={styles["weather-details"]}>
                하늘에는 구름 있고, 바람 많이 불어요
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

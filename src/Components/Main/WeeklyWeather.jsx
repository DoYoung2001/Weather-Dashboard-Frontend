import React from "react";
import styles from "./WeeklyWeather.module.css"; // CSS 모듈 적용

function WeeklyForecast() {
  const weeklyData = [
    {
      day: "오늘",
      date: "2.20",
      morning: "☁️",
      afternoon: "☁️",
      lowTemp: "-10°",
      highTemp: "2°",
    },
    {
      day: "금",
      date: "2.21",
      morning: "☀️",
      afternoon: "☀️",
      lowTemp: "-8°",
      highTemp: "3°",
    },
    {
      day: "토",
      date: "2.22",
      morning: "☀️",
      afternoon: "☀️",
      lowTemp: "-6°",
      highTemp: "5°",
    },
    {
      day: "일",
      date: "2.23",
      morning: "☀️",
      afternoon: "☀️",
      lowTemp: "-7°",
      highTemp: "6°",
    },
    {
      day: "월",
      date: "2.24",
      morning: "☀️",
      afternoon: "☀️",
      lowTemp: "-5°",
      highTemp: "7°",
    },
    {
      day: "화",
      date: "2.25",
      morning: "☀️",
      afternoon: "☀️",
      lowTemp: "-1°",
      highTemp: "10°",
    },
    {
      day: "수",
      date: "2.26",
      morning: "☀️",
      afternoon: "☀️",
      lowTemp: "0°",
      highTemp: "10°",
    },
  ];

  return (
    <div className={`${styles.weatherCard} ${styles.weeklyForecast}`}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>주간 날씨</h2>
      </div>

      <div className={styles.forecastTable}>
        <table>
          <tbody>
            {weeklyData.map((item, index) => (
              <tr
                key={index}
                className={item.day === "오늘" ? styles.todayRow : ""}
              >
                <td className={styles.dayCell}>
                  <div
                    className={`${styles.dayName} ${
                      item.day === "일" ? styles.sunday : ""
                    }`}
                  >
                    {item.day}
                  </div>
                  <div className={styles.dayDate}>{item.date}</div>
                </td>
                <td className={styles.iconCell}>
                  <div className={styles.weatherIconSmall}>{item.morning}</div>
                </td>
                <td className={styles.iconCell}>
                  <div className={styles.weatherIconSmall}>
                    {item.afternoon}
                  </div>
                </td>
                <td className={styles.tempCell}>
                  <div className={styles.tempRangeSmall}>
                    {item.lowTemp} / {item.highTemp}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeeklyForecast;

import React from "react";
import styles from "./Main.module.css";
import Sidebar from "../Sidebar/Sidebar";
import TodayWeather from "./TodayWeather";
import WeeklyForecast from "./WeeklyWeather";
import WeatherMap from "./WeatherMap";
import WeatherNews from "./WeatherNews";
import LocationSearch from "./LocationSearch";

function Main() {
  return (
    <div className={styles["app-container"]}>
      <Sidebar />
      <div className={styles["main-content"]}>
        <div className={styles["weather-grid"]}>
          <TodayWeather />
          <WeatherMap />
          <WeeklyForecast />
          <WeatherNews />
          <LocationSearch />
        </div>
      </div>
    </div>
  );
}

export default Main;

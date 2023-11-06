import moment from "moment";
import { useState } from "react";
import MonthComponent from "./MonthComponent";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import WeekComponent from "./WeekComponent";
import DayComponent from "./DayComponent";

const now = moment().clone();
const today = moment().clone();

function TopComponent() {
  const [currentMonth, setCurrentMonth] = useState(now);
  const [calendarType, setCalendarType] = useState("month");

  const prevMonth = () => {
    const prev = currentMonth.clone().subtract(1, "month");
    setCurrentMonth(prev);
    // const minMonth = now.clone().subtract(5, "months").format("YYYY.MM");
    // if (now.isBefore(minMonth, "month")) {
    //  return;
    // }
  };

  const nextMonth = () => {
    const next = currentMonth.clone().add(1, "month");
    setCurrentMonth(next);
  };

  const inputType = (e) => {
    //console.log(e.target.value);
    setCalendarType(e.target.value);
  };

  return (
    <div>
      <div className="calendar_top">
        <IconButton onClick={prevMonth}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <span className="Month" id="dateTxt">
          {currentMonth.format("YYYY.MM")}
        </span>
        <IconButton onClick={nextMonth}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
      <div>
        <select id="select_term" onChange={inputType}>
          <option value="month">월간</option>
          <option value="week">주간</option>
          <option value="day">일간</option>
        </select>
      </div>
      <div className="calendar_box">
        {calendarType === "month" ? (
          <MonthComponent currentMonth={currentMonth} today={today} />
        ) : calendarType === "week" ? (
          <WeekComponent currentMonth={currentMonth} today={today} />
        ) : (
          <DayComponent currentMonth={currentMonth} today={today} />
        )}
      </div>
    </div>
  );
}

export default TopComponent;

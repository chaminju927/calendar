import moment from "moment";
import { useState } from "react";
import MonthComponent from "./MonthComponent";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import WeekComponent from "./WeekComponent";
import DayComponent from "./DayComponent";

const selectType = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
};
const now = moment();
const today = moment();
const nowYYYYMM = now.format("YYYY.MM");

function TopComponent() {
  const [currentMonth, setCurrentMonth] = useState(now);
  const [calendarType, setCalendarType] = useState(selectType.MONTH); //selectBox
  const [currentString, setCurrentString] = useState(nowYYYYMM);

  const prevMonth = () => {
    const prev = currentMonth.subtract(1, "month");
    const prevString = prev.format("YYYY.MM");
    setCurrentString(prevString);
    setCurrentMonth(prev);
  };

  const nextMonth = () => {
    const next = currentMonth.add(1, "month");
    const nextString = next.format("YYYY.MM");
    setCurrentMonth(next);
    setCurrentString(nextString);
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
          {currentString}
        </span>
        <IconButton onClick={nextMonth}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
      <div>
        <select id="select_term" onChange={inputType}>
          <option value={selectType.MONTH}>월간</option>
          <option value={selectType.WEEK}>주간</option>
          <option value={selectType.DAY}>일간</option>
        </select>
      </div>
      <div className="calendar_box">
        {calendarType === selectType.MONTH ? (
          <MonthComponent currentMonth={currentMonth} today={today} />
        ) : calendarType === selectType.WEEK ? (
          <WeekComponent currentMonth={currentMonth} today={today} />
        ) : (
          <DayComponent currentMonth={currentMonth} today={today} />
        )}
      </div>
    </div>
  );
}

export default TopComponent;

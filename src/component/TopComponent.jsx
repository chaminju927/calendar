import moment from "moment";
import { useState, useEffect } from "react";
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
function TopComponent() {
  const [current, setCurrent] = useState(now);
  const [currentString, setCurrentString] = useState();

  const [calendarType, setCalendarType] = useState(selectType.MONTH); //selectBox
  // const [currentString, setCurrentString] = useState(
  //   currentMonth.format("YYYY.MM")
  // );

  useEffect(() => {
    setCurrentString(current.format("YYYY.MM"));
  }, [current]);

  const prevMonth = () => {
    setCurrent(current.clone().subtract(1, "month"));
    setCurrentString(current.format("YYYY.MM"));
  };

  const nextMonth = () => {
    setCurrent(current.clone().add(1, "month"));
    setCurrentString(current.format("YYYY.MM"));
  };

  const inputType = (e) => {
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
          <MonthComponent currentMonth={current} />
        ) : calendarType === selectType.WEEK ? (
          <WeekComponent />
        ) : (
          <DayComponent />
        )}
      </div>
    </div>
  );
}

export default TopComponent;

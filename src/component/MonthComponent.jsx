import moment from "moment";
import { useState } from "react";
import CalendarComponent from "./CalendarComponent";
const now = moment().clone();
function MonthComponent() {
  const [currentMonth, setCurrentMonth] = useState(now);

  const prevMonth = () => {
    setCurrentMonth(currentMonth.clone().subtract(1, "month"));
  };

  const nextMonth = () => {
    setCurrentMonth(currentMonth.clone().add(1, "month"));
  };

  //   const prevMonth = () => {
  //     const currentMonth = moment(month, "YYYY.MM");
  //     var prev = currentMonth.clone().subtract(1, "months").format("YYYY.MM");
  //     setMonth(prev);
  //     setClicked(clicked - 1);
  //     // const minMonth = moment().subtract(5, "months").format("YYYY.MM");
  //     // if (currentMonth.isBefore(minMonth, "month")) {
  //     //   return;
  //     // }
  //   };

  //   const nextMonth = () => {
  //     const currentMonth = moment(month, "YYYY.MM");
  //     const next = currentMonth.clone().add(1, "months").format("YYYY.MM");
  //     setMonth(next);
  //     setClicked(clicked + 1);
  //     // const maxMonth = moment().add(5, "months").format("YYYY.MM");
  //     // if (currentMonth.isAfter(maxMonth, "month")) {
  //     //   return;
  //     // }
  //   };

  return (
    <div>
      <div className="calendar_top">
        <div className="navi_area">
          <button
            className="prev_crcl"
            id="cal_prev"
            onClick={prevMonth}
          ></button>
          <span className="Month" id="dateTxt">
            {currentMonth.format("YYYY.MM")}
          </span>
          <button
            className="next_crcl"
            id="cal_next"
            onClick={nextMonth}
          ></button>
        </div>
      </div>
      <div>
        <CalendarComponent currentMonth={currentMonth} />
      </div>
    </div>
  );
}

export default MonthComponent;

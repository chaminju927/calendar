import moment from "moment";
import { useState } from "react";

function MonthComponent() {
  const [month, setMonth] = useState(moment().format("YYYY.MM"));

  const prevMonth = () => {
    const currentMonth = moment(month, "YYYY.MM");
    const prev = currentMonth.subtract(1, "months").format("YYYY.MM");
    setMonth(prev);
    // 이전 3개월까지만 조회가능. moment.js의 isBefore()
    const minMonth = currentMonth
      .clone()
      .subtract(3, "months")
      .format("YYYY.MM");
    if (currentMonth.isBefore(minMonth, "month")) {
      return;
    }
  };

  const nextMonth = () => {
    const currentMonth = moment(month, "YYYY.MM");
    const next = currentMonth.add(1, "months").format("YYYY.MM");
    setMonth(next);
    const maxMonth = moment().add(3, "months").format("YYYY.MM");
    if (currentMonth.isAfter(maxMonth, "month")) {
      return;
    }
  };

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
            {month}
          </span>
          <button
            className="next_crcl"
            id="cal_next"
            onClick={nextMonth}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default MonthComponent;

import moment from "moment";
import { useState } from "react";
import CalendarComoponent from "./CalendarComponent";

function MonthComponent() {
  const [month, setMonth] = useState(moment().format("YYYY.MM"));
  const [clicked, setClicked] = useState(0); //props로 전달하는 클릭 횟수

  const prevMonth = () => {
    const currentMonth = moment(month, "YYYY.MM");
    var prev = currentMonth.subtract(1, "months").format("YYYY.MM");
    setMonth(prev);
    setClicked(-1);
    // 이전 5개월까지만 조회가능하게 수정하기!!
    const minMonth = moment().subtract(5, "months").format("YYYY.MM");
    if (currentMonth.isBefore(minMonth, "month")) {
      return;
    }
  };

  const nextMonth = () => {
    const currentMonth = moment(month, "YYYY.MM");
    const next = currentMonth.add(1, "months").format("YYYY.MM");
    setMonth(next);
    setClicked(+1);
    const maxMonth = moment().add(5, "months").format("YYYY.MM");
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
      <div>
        <CalendarComoponent clicked={clicked} />
      </div>
    </div>
  );
}

export default MonthComponent;

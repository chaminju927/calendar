import moment from "moment";
import { useState, useEffect } from "react";

function MonthComponent() {
  //const [todayDate, setTodayDate] = useState(moment().format("YYYYMMDD"));
  const [month, setMonth] = useState(moment().format("YYYY.MM"));

  //useEffect(() => {}, []);

  const prevMonth = () => {
    const monthTxt = moment().format("YYYYMMDD"); //이번달 string값

    const prev = moment().add(-1, "months").format("YYYY.MM");
    setMonth(prev);
    const minMonth = moment().add(-3, "months").format("YYYYMMDD");
    if (parseInt(monthTxt) < parseInt(minMonth)) {
      return false;
    }
  };
  const nextMonth = () => {
    const next = moment().add(1, "months").format("YYYY.MM");
    setMonth(next);
    const monthTxt = moment().format("YYYYMMDD"); //이번달 string값

    const maxMonth = moment().add(3, "months").format("YYYYMMDD");
    if (parseInt(maxMonth) < parseInt(monthTxt)) {
      return false;
    }
  };

  //클릭시 월 이동
  const clickMonth = (e) => {
    const action = e.target.value;
    console.log(action);
    switch (action) {
      case "move-prev":
        prevMonth();
        break;
      case "move-next":
        nextMonth();
        break;
      default:
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
            value="move-prev"
            onClick={clickMonth}
          ></button>
          <span class="Month" id="dateTxt">
            {month}
          </span>
          <button
            className="next_crcl"
            id="cal_next"
            value="move-next"
            onClick={clickMonth}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default MonthComponent;

import moment from "moment";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CalendarComponent from "./CalendarComponent";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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
        <IconButton onClick={prevMonth}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        {/* <button className="prev_crcl" id="cal_prev" onClick={prevMonth}>
            &lt;
          </button> */}
        <span className="Month" id="dateTxt">
          {currentMonth.format("YYYY.MM")}
        </span>
        <IconButton onClick={nextMonth}>
          <KeyboardArrowRightIcon />
        </IconButton>
        {/* <button className="next_crcl" id="cal_next" onClick={nextMonth}>
          {" "}
          &gt;
        </button> */}
      </div>
      <div>
        <CalendarComponent currentMonth={currentMonth} />
      </div>
    </div>
  );
}

export default MonthComponent;

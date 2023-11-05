import moment from "moment";
import { useState, useEffect } from "react";

function CalendarComponent({ currentMonth }) {
  const firstDayOfMonth = currentMonth.clone().startOf("month").weekday(0); //이번달 첫 주의 시작일(일요일부터 시작)
  const firstWeek = firstDayOfMonth.week(); // 이번달 첫주가 몇번째 주인지
  const lastDayOfMonth = currentMonth.clone().endOf("month");
  // const lastWeek = lastDayOfMonth.isoWeek();

  // const lastDayOfMonth = currentMonth.clone().endOf("month");
  const lastWeek = lastDayOfMonth.week() === 1 ? 53 : lastDayOfMonth.week(); //이번달 마지막 주
  // const lastDayOfWeek = lastDayOfMonth.day(); // 마지막 날의 요일

  useEffect(() => {
    console.log(firstDayOfMonth);
    console.log(firstWeek);
    console.log(lastDayOfMonth);
    console.log(lastWeek);
  }, []);

  const drawTable = () => {
    const calendarTable = [];
    for (let week = firstWeek; week <= lastWeek; week++) {
      const weekRow = [];
      for (let i = 0; i < 7; i++) {
        const day = firstDayOfMonth.clone().week(week).add(i, "days");
        const isCurrentMonth = day.isSame(currentMonth, "month");
        weekRow.push(
          <td
            key={day.format("YYYY-MM-DD")}
            className={isCurrentMonth ? "current-month" : "other-month"}
          >
            <div
              className={`day ${
                day.day() === 0 ? "sun" : day.day() === 6 ? "week" : ""
              }`}
            >
              <span className="day">{day.format("D")}</span>
            </div>
          </td>
        );
      }
      calendarTable.push(<tr key={week}>{weekRow}</tr>);
    }

    return calendarTable;
  };

  return (
    <div>
      <div className="tbl_calendar">
        <table>
          <thead>
            <tr>
              <th className="sun">일요일</th>
              <th>월요일</th>
              <th>화요일</th>
              <th>수요일</th>
              <th>목요일</th>
              <th>금요일</th>
              <th>토요일</th>
            </tr>
          </thead>
          <tbody id="FlexCalendar">{drawTable()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CalendarComponent;

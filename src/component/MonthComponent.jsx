import { useEffect } from "react";

//const today = moment().clone();

function MonthComponent({ currentMonth, today }) {
  // 이번달 첫 주의 시작 일자(일요일=0 부터 시작)
  const firstDayOfMonth = currentMonth.clone().startOf("month").weekday(0);
  // 이번달 첫 주
  const firstWeek = firstDayOfMonth.week();
  // 이번달 마지막 주의 마지막 일자
  const lastDayOfMonth = currentMonth.clone().endOf("month");
  // 이번달 마지막 주 (12월 마지막주가 1월로 넘어갈 경우 총 53주)
  const lastWeek = lastDayOfMonth.week() === 1 ? 53 : lastDayOfMonth.week();

  useEffect(() => {
    // console.log(firstDayOfMonth);
    // console.log(firstWeek);
    // console.log(lastDayOfMonth);
    // console.log(lastWeek);
    console.log(today);
  }, []);

  const drawTable = () => {
    const calendarTable = [];
    for (let week = firstWeek; week <= lastWeek; week++) {
      const weekRow = [];
      //공란
      weekRow.push(<td className="current-month"></td>);
      for (let i = 0; i < 7; i++) {
        const day = firstDayOfMonth.clone().week(week).add(i, "days");
        const isCurrentMonth = day.isSame(currentMonth, "month");
        const isToday = day.isSame(today, "day");
        // console.log(day);
        weekRow.push(
          <td
            key={day.format("YYYY-MM-DD")}
            className={isCurrentMonth ? "current-month" : "other-month"}
          >
            <div
              className={`${
                day.day() === 0
                  ? "sunday"
                  : day.day() === 6
                  ? "saturday"
                  : "weekday"
              }`}
            >
              <span className={isToday ? "today" : ""}>{day.format("D")}</span>
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
              <th className="all">전체</th>
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

export default MonthComponent;

import { useEffect, useState } from "react";
import moment from "moment";

function MonthComponent({ currentMonth }) {
  // const [current, setCurrent] = useState(currentMonth);
  // 이번달 첫 주의 시작 일자(일요일=0 부터 시작)
  const firstDayOfMonth = currentMonth.clone().startOf("month").startOf("week");
  // 이번달 첫 주
  const firstWeek = firstDayOfMonth.week();
  // 이번달 마지막 주의 마지막 일자
  const lastDayOfMonth = currentMonth.clone().endOf("month");
  // 이번달 마지막 주 (12월 마지막주가 1월로 넘어갈 경우 총 53주)
  const lastWeek = lastDayOfMonth.week() === 1 ? 53 : lastDayOfMonth.week();
  const [calendar, setCalendar] = useState([]);
  //const [week, setWeek] = useState()

  useEffect(() => {
    // console.log(currentMonth);
    // console.log(current);
    drawTable();
  }, [currentMonth]);

  const drawTable = () => {
    console.log(firstWeek);
    console.log(lastWeek);
    console.log(firstDayOfMonth);
    console.log(lastDayOfMonth);
    const newCalendar = [];
    for (let week = firstWeek; week <= lastWeek; week++) {
      const weekRow = [];
      for (let i = 0; i < 8; i++) {
        var day = firstDayOfMonth.startOf("week").add(i, "days");
        const isCurrentMonth = day.isSame(currentMonth, "month");
        const isToday = day.isSame(moment(), "day");
        if (i !== 0) {
          weekRow.push({
            key: day.format("YYMMDD"),
            className: isCurrentMonth ? "current-month" : "other-month",
            day: day.format("DD"),
            isToday: isToday,
          });
        } else {
          weekRow.push({ key: `empty-${week}`, className: "current-month" });
        }
      }
      newCalendar.push({ week: week, weekRow: weekRow });
    }
    setCalendar(newCalendar);
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
          <tbody id="FlexCalendar">
            {calendar.map((week) => (
              <tr key={week.week}>
                {week.weekRow.map((day) => (
                  <td key={day.key} className={day.className}>
                    <div
                      className={`${
                        day.key === "YYMMDD" ? "sunday" : "weekday"
                      }`}
                    >
                      <span className={day.isToday ? "today" : ""}>
                        {day.day}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MonthComponent;

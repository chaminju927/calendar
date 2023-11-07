import { useEffect, useState } from "react";
import moment from "moment";

//const today = moment().clone();
// 일요일부터 시작하도록 moment.js 설정 변경
moment.updateLocale("en", {
  week: {
    dow: 0, // 일요일을 주의 첫날로 설정
  },
});

function MonthComponent({ currentMonth, today }) {
  const [current, setCurrent] = useState(moment(currentMonth));

  // 이번달 첫 주의 시작 일자(일요일=0 부터 시작)
  const firstDayOfMonth = current.startOf("month");
  // 이번달 첫 주
  const firstWeek = firstDayOfMonth.week();
  // 이번달 마지막 주의 마지막 일자
  const lastDayOfMonth = current.endOf("month");
  // 이번달 마지막 주 (12월 마지막주가 1월로 넘어갈 경우 총 53주)
  const lastWeek = lastDayOfMonth.week() === 1 ? 53 : lastDayOfMonth.week();
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    console.log(currentMonth);
    drawTable();
    console.log(current);
  }, [current]);

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
        const isCurrentMonth = day.isSame(current, "month");
        const isToday = day.isSame(moment(), "day");
        if (i !== 0) {
          weekRow.push({
            key: day.format("YYYY-MM-DD"),
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
                        day.key === "YY.MM.DD" ? "sunday" : "weekday"
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

import { useEffect, useState } from "react";

//const today = moment().clone();

function MonthComponent({ currentMonth, today }) {
  const [current, setCurrent] = useState(currentMonth);
  // 이번달 첫 주의 시작 일자(일요일=0 부터 시작)
  const firstDayOfMonth = current.startOf("month").weekday(0);
  // 이번달 첫 주
  const firstWeek = firstDayOfMonth.week();
  // 이번달 마지막 주의 마지막 일자
  const lastDayOfMonth = current.endOf("month");
  // 이번달 마지막 주 (12월 마지막주가 1월로 넘어갈 경우 총 53주)
  const lastWeek = lastDayOfMonth.week() === 1 ? 53 : lastDayOfMonth.week();
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    drawTable();
  }, [current]);

  const drawTable = () => {
    for (let week = firstWeek; week <= 48; week++) {
      for (let i = 0; i < 7; i++) {
        var days = firstDayOfMonth
          .startOf("week")
          .add(i, "days")
          .format("YY.MM.DD");
        setCalendar([...calendar, ...days, days]);
        console.log(days);
      }
      week++;
    }
    //const weekRow = [];
    //공란
    // weekRow.push(<td className="current-month"></td>);
    // for (let i = 0; i < 7; i++) {
    //   const day = firstDayOfMonth.week(week).add(i, "days");
    //   const isCurrent = day.isSame(current, "month");
    //   const isToday = day.isSame(today, "day");
    //   // console.log(day);
    //   weekRow.push(
    //     <td
    //       key={day.format("YYYY-MM-DD")}
    //       className={isCurrent ? "current-month" : "other-month"}
    //     >
    //       <div
    //         className={`${
    //           day.day() === 0
    //             ? "sunday"
    //             : day.day() === 6
    //             ? "saturday"
    //             : "weekday"
    //         }`}
    //       >
    //         <span className={isToday ? "today" : ""}>{day.format("D")}</span>
    //       </div>
    //     </td>
    //   );
    // }
    //calendarTable.push(<tr key={week}>{weekRow}</tr>);
    // }
    // return calendarTable;
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
            <tr>
              <td className="current-month"></td>
              {/* {calendar.map((date)=> ) */}
              <td>
                <div>
                  <span>{calendar}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MonthComponent;

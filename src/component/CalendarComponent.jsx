import moment from "moment";
import { useEffect, useState } from "react";

function CalendarComoponent(props) {
  const originMoment = moment(); //moment는 mutable이므로 복제해서 사용
  const cloneMoment = originMoment.clone();

  const [getClicked, setClicked] = useState(0);
  const [today, setToday] = useState(cloneMoment);
  const firstWeek = cloneMoment.startOf("month").week(); // 해당 월의 첫 주
  const lastWeek =
    cloneMoment.endOf("month").week() === 1
      ? 53
      : cloneMoment.endOf("month").week(); // 해당 월의 마지막주. 1년은 총 53주

  const calendarTable = [];

  useEffect(() => {
    setClicked(props.clicked);
    drawTable();
    console.log(getClicked);
    //console.log(today);

    //클릭 수에 따라 today상태 변경
    if (getClicked > 0) {
      setToday(moment().add(getClicked));
    } else if (getClicked < 0) {
      setToday(moment.abstract(getClicked));
    }
    // console.log(cloneMoment.startOf("year").week()); // 이번 주가 몇번째 주인지 return
    // console.log(moment().date()); //오늘 날짜
    // console.log(moment().startOf("year").week(44).startOf("week")); //이번주의 첫번째 일
  }, [getClicked]);

  const drawTable = () => {
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      let weekRow = [];
      //첫번째 셀 공란으로 처리
      weekRow.push(
        <td>
          <div id="week_0">
            <div className="date_head">
              <span className="day"></span>
              <span className="day_title"></span>
            </div>
            <div className="date_body"></div>
          </div>
        </td>
      );
      //이번 주의 첫 요일부터 시작
      for (let i = 0; i < 7; i++) {
        var days = cloneMoment
          .startOf("year")
          .week(week)
          .startOf("week")
          .add(week - firstWeek + i, "days");
        //console.log(days);
        weekRow.push(
          <td key={week}>
            <div className="other_month" id={week}>
              <div className="date_head">
                <span className="day">{days.format("D")}</span>
                <span className="day_title"></span>
              </div>
              <div className="date_body"></div>
            </div>
          </td>
        );
      }
      //키 값 수정하기!!
      calendarTable.push(
        <tr key={week - firstWeek + 1} id={`week_${week - firstWeek + 1}`}>
          {weekRow}
        </tr>
      );
    }
    return calendarTable;
  };

  return (
    <div>
      <div className="tbl_calendar">
        <table>
          <thead>
            <tr>
              <th>전체</th>
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
export default CalendarComoponent;

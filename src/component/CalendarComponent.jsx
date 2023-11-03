import moment from "moment";
import { useEffect, useState, useCallback } from "react";

const originMoment = moment();
//이 달의 시작하는 주
const originFirstWeek = moment().startOf("month").week();
//이 달의 마지막 주
const originlLastWeek =
  moment().endOf("month").week() === 1 ? 53 : moment().endOf("month").week();

function CalendarComoponent(props) {
  const [getMoment, setMoment] = useState(originMoment);
  const [firstWeek, setFirstWeek] = useState(originFirstWeek);
  const [lastWeek, setLastWeek] = useState(
    getMoment.endOf("month").week() === 1 ? 53 : getMoment.endOf("month").week()
  );
  // props로 받아온 클릭 횟수
  const [getClicked, setClicked] = useState(0);

  const momentChange = (useCallback =
    (() => {
      getClicked > 0
        ? setMoment(getMoment.add(getClicked, "month"))
        : setMoment(getMoment.subtract(getClicked * -1, "months"));
      setFirstWeek(getMoment.startOf("month").week());
      setLastWeek(
        getMoment.endOf("month").week() === 1
          ? 53
          : getMoment.endOf("month").week()
      );
    },
    [getClicked]));

  useEffect(() => {
    console.log(moment().startOf("month").week());
    console.log(firstWeek);
    // var clicked = props.clicked;
    // setClicked(getClicked + clicked);
    // console.log(getClicked);
    // //클릭값 변화 있을시, moment,firstWeek lastWeek값 변경
    // getClicked !== 0 && momentChange();
    // console.log(firstWeek);
    // console.log(lastWeek);
    // drawTable();
  }, [getClicked]);

  const drawTable = () => {
    var calendarTable = [];

    for (let week = firstWeek; week <= lastWeek; week++) {
      var weekRow = [];
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
      //이번 주의 첫 요일부터 row에 push
      for (let i = 0; i < 7; i++) {
        var days =
          getClicked >= 0
            ? getMoment
                .add(getClicked, "months")
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(week - firstWeek + i, "days")
            : getMoment
                .subtract(getClicked * -1, "months")
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(week - firstWeek + i, "days");
      }
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
      calendarTable.push(
        <tr key={week - firstWeek + 1} id={`week_${week - firstWeek + 1}`}>
          {weekRow}
        </tr>
      );
    }

    // return calendarTable;
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

import { useEffect } from "react";
import moment from "moment";

function DayComponent({ currentMonth, today }) {
  useEffect(() => {
    // console.log(today);
    // console.log(moment.format("HH:mm"));
  }, []);

  const allDayRow = [];
  const timeLineRow = [];
  const scheduleRow = [];
  // 종일 일정
  const allDaySchedule = () => {
    allDayRow.push(<span>[차민주] 오후 반차</span>);
    return allDayRow;
  };
  // 시간대별 일정 데이터
  const drawDayTable = () => {
    // for (let i = 0; i < 24; i++) {
    //   scheduleRow.push(<div></div>);
    // }
    // return scheduleRow;
  };
  // 시간대 출력
  const drawTime = () => {
    const startTime = today.clone().startOf("day").format("HH:mm");
    const endTime = today.clone().endOf("day").format("HH:mm");
    console.log(startTime.clone().format("HH:mm"));
    console.log(endTime.clone().format("HH:mm"));
    for (let time = 0; time <= 24; time++) {
      timeLineRow.push(
        <div>
          <span id>{startTime.clone().format("HH:mm")}</span>
        </div>
      );

      startTime.clone().add(1, "hours");
    }
    return timeLineRow;
  };
  return (
    <div>
      <div className="day_calendar_title">
        <div className="day_blank"></div>
        <div className="day_title">{today.format("DD")}월요일</div>
      </div>
      <div className="day_calendar1">
        <div className="box0">종일</div>
        <div className="box1">{/* <div>{allDaySchedule()}</div> */}</div>
      </div>
      <div className="day_calendar2">
        <div className="box2 timezone">{drawTime()}</div>
        <div className="box3">
          {/* <div className="day_container">{drawDayTable()}</div> */}
        </div>
      </div>
    </div>
  );
}
export default DayComponent;

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
    allDayRow.push(
      <div>
        <span>[차민주] 오후 반차</span>
      </div>
    );
    allDayRow.push(
      <div>
        <span>[차민주] 오후 반차</span>
      </div>
    );

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
    const startTime = today.clone().startOf("day");
    const endTime = today.clone().endOf("day");
    const timeLineRow = [];

    for (
      let time = startTime.clone();
      time.isSameOrBefore(endTime);
      time.add(1, "hours")
    ) {
      timeLineRow.push(
        <div key={time.format("HH:mm")} className="timeBox">
          <span>{time.format("HH:mm")}</span>
        </div>
      );
    }

    return timeLineRow;
  };

  return (
    <div>
      <div className="day_calendar_title">
        <div className="day_blank"></div>
        <div className="day_title">
          <span>
            {today.format("DD")} {today.format("dddd")}
          </span>
        </div>
      </div>
      <div className="day_calendar1">
        <div className="box0">종일</div>
        <div className="box1">
          <div>{allDaySchedule()}</div>
        </div>
      </div>
      <div className="day_calendar2">
        <div className="box2">{drawTime()}</div>
        <div className="box3">
          {/* <div className="day_container">{drawDayTable()}</div> */}
        </div>
      </div>
    </div>
  );
}
export default DayComponent;

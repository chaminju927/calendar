// import { useEffect } from "react";
// import moment from "moment";
// //import Grid from "@mui/material/Grid";
function DayComponent({ today }) {
  //   useEffect(() => {
  //     // console.log(today);
  //     // console.log(moment.format("HH:mm"));
  //   }, []);
  //    const cloned = today.clone();
  //   const startTime = cloned.startOf("day");
  //   const endTime = cloned.endOf("day");
  //   const time = startTime.clone();
  //   debugger;

  //   const allDayRow = [];
  //   const scheduleRow = [];
  //   // 종일 일정
  //   const allDaySchedule = () => {
  //     allDayRow.push(
  //       <div className="schedule_top">
  //         <span>[차민주] 오후 반차</span>
  //       </div>
  //     );
  //     allDayRow.push(
  //       <div>
  //         <span>[차민주] 연차 휴가</span>
  //       </div>
  //     );
  //     return allDayRow;
  //   };
  //   //일정 데이터 예시
  //   let schedule = {
  //     start: "08:00",
  //     end: "10:00",
  //     detail: "[한국후지필름BI] 현장 안정화 패치",
  //   };
  //   // 시간대별 일정
  //   const timeSchedule = () => {
  //     console.log(startTime.clone().add(30, "minutes"));
  //     console.log(schedule.start);

  //     for (
  //       // let time = startTime.clone();
  //       time;
  //       time.isSameOrBefore(endTime);
  //       time.add(30, "minutes")
  //     ) {
  //       scheduleRow.push(
  //         <div className="time_schedule">
  //           {time.format("HH:mm") === schedule.start ? (
  //             <div className="schedule_container">
  //               <span className="schedule1">
  //                 {schedule.time} {schedule.detail}
  //               </span>
  //             </div>
  //           ) : (
  //             <div className="middle-time">
  //               <span></span>
  //             </div>
  //           )}
  //         </div>
  //       );
  //     }
  //     return scheduleRow;
  //   };
  //   // 시간대 출력 (30분 단위)
  //   const drawTime = () => {
  //     const timeLineRow = [];
  //     for (
  //       // let time = startTime.clone();
  //       time;
  //       time.isSameOrBefore(endTime);
  //       time.add(30, "minutes")
  //     ) {
  //       time.format("mm") === "00" ? (
  //         timeLineRow.push(
  //           <div key={time.format("HH:mm")} className="timeBox">
  //             <span>{time.format("HH:mm")}</span>
  //           </div>
  //         )
  //       ) : (
  //         <div key={time.format("HH:mm")} className="blankTime">
  //           <span></span>
  //         </div>
  //       );
  //     }
  //     return timeLineRow;
  //   };

  return (
    <div>
      {/* <div className="day_calendar_title">
        <div className="day_blank"></div>
        <div className="day_title">
          <span className="day_today">
            {today.format("DD") < 10 ? today.format("D") : today.format("DD")}{" "}
          </span>
           <span>{today.format("dddd")}</span> 
        </div>
      </div>
      <div className="day_calendar1">
        <div className="allDay">
          <span>종일</span>
        </div>
        <div className="container1">
          <div className="item0">{allDaySchedule()}</div>
        </div>
      </div>
      <div className="day_calendar2">
        <div className="timeLine">{drawTime()}</div>
        <div className="item3">
          <div>{timeSchedule()}</div>
        </div>
      </div> */}
    </div>
  );
}
export default DayComponent;

import moment from "moment";

function CalendarComoponent() {
  // 월의 첫 번째 날과 마지막 날을 계산
  const firstDay = moment().startOf("month").startOf("week");
  const lastDay = moment().endOf("month").endOf("week");

  // 달력 테이블을 생성
  const calendarTable = [];

  let currentDay = firstDay.clone();

  while (currentDay.isBefore(lastDay)) {
    const weekRow = [];
    for (let i = 0; i < 7; i++) {
      const dayDate = currentDay.format("YYYYMMDD");
      weekRow.push(
        <td key={dayDate}>
          {i === 0 ? (
            "" // 첫 번째 열은 공란
          ) : (
            <div className="other_month" id={dayDate}>
              <div className="date_head">
                <span className="day">{currentDay.format("D")}</span>
                <span className="day_title"></span>
              </div>
              <div className="date_body"></div>
            </div>
          )}
        </td>
      );
      currentDay.add(1, "day");
    }
    calendarTable.push(
      <tr key={weekRow[1].key} id={`week_${calendarTable.length}`}>
        {weekRow}
      </tr>
    );
  }
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
          <tbody id="FlexCalendar">{calendarTable}</tbody>
          {/* <tbody id="FlexCalendar">
            <tr id="week_0">
              <td className="week"></td>
              <td>
                <div className="other_month" id="">
                  <div className="date_head">
                    <span className="day">29</span>
                    <span className="day_title"></span>
                  </div>
                  <div className="date_body"></div>
                </div>
              </td>
              <td>
                <div className="other_month" id="">
                  <div className="date_head">
                    <span className="day">29</span>
                    <span className="day_title"></span>
                  </div>
                  <div className="date_body"></div>
                </div>
              </td>
              <td>
                <div className="other_month" id="">
                  <div className="date_head">
                    <span className="day">29</span>
                    <span className="day_title"></span>
                  </div>
                  <div className="date_body"></div>
                </div>
              </td>
              <td>
                <div className="other_month" id="">
                  <div className="date_head">
                    <span className="day">29</span>
                    <span className="day_title"></span>
                  </div>
                  <div className="date_body"></div>
                </div>
              </td>
              <td>
                <div className="other_month" id="">
                  <div className="date_head">
                    <span className="day">29</span>
                    <span className="day_title"></span>
                  </div>
                  <div className="date_body"></div>
                </div>
              </td>
              <td>
                <div className="other_month" id="">
                  <div className="date_head">
                    <span className="day">29</span>
                    <span className="day_title"></span>
                  </div>
                  <div className="date_body"></div>
                </div>
              </td>
              <td>
                <div className="other_month" id="">
                  <div className="date_head">
                    <span className="day">29</span>
                    <span className="day_title"></span>
                  </div>
                  <div className="date_body"></div>
                </div>
              </td>
            </tr>
            <tr id="week_1">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody> */}
        </table>
      </div>
    </div>
  );
}
export default CalendarComoponent;

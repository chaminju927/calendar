
function CalendarComoponent() {
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
          <tbody id="FlexCalendar">
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default CalendarComoponent;

import "./calendar.css";
import CalendarComoponent from "./component/CalendarComponent";
import MonthComponent from "./component/MonthComponent";

function App() {
  return (
    <div className="App">
      <MonthComponent />
      <CalendarComoponent />
    </div>
  );
}

export default App;

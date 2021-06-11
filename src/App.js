import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shifts, setShifts] = useState([]);

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  const handleStartTimeInputChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeInputChange = (event) => {
    setEndTime(event.target.value);
  };

  const saveEmployeeShift = () => {
    setShifts([...shifts, { name, startTime, endTime }]);
  };

  return (
    <div className="App">
      <div>
        <label>
          Name
          <input value={name} onChange={handleNameInputChange} />
        </label>
        <label>
          Start Time
          <input
            type="datetime-local"
            value={startTime}
            onChange={handleStartTimeInputChange}
          />
        </label>
        <label>
          End Time
          <input
            type="datetime-local"
            value={endTime}
            onChange={handleEndTimeInputChange}
          />
        </label>
        <button onClick={saveEmployeeShift}>Save</button>
      </div>
    </div>
  );
};

export default App;

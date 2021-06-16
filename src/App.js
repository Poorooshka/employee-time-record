import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
    )
      .then((response) => response.json())
      .then(setShifts);
  }, []);

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
    setShifts([...shifts, { name, start: startTime, end: endTime }]);
    setName("");
    setStartTime("");
    setEndTime("");
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
      <div>
        {shifts.map((shift) => (
          <div key={shift.start}>
            <div>{shift.name}</div>
            <div>{shift.start}</div>
            <div>{shift.end}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

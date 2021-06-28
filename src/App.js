import "./App.css";
import { useState, useEffect } from "react";
import { displayPrice, displayTotalPrice } from "./App.utility.js";

const App = () => {
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [shifts, setShifts] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
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
        <label>
          Filter Shifts
          <input value={search} onChange={handleSearchInputChange} />
        </label>
      </div>
      <div>
        {shifts
          .filter((shift) =>
            shift.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((shift) => (
            <div key={shift.start}>
              <div>{shift.name}</div>
              <div>{shift.start}</div>
              <div>{shift.end}</div>
              <div>
                {Math.floor(
                  (Date.parse(shift.end) - Date.parse(shift.start)) /
                    (1000 * 60 * 60)
                )}
                :
                {String(
                  Math.floor(
                    (Date.parse(shift.end) - Date.parse(shift.start)) /
                      (1000 * 60)
                  ) % 60
                ).padStart(2, "0")}
                h
              </div>
              <div>{displayPrice(shift)}</div>
            </div>
          ))}
        <div>
          <p>Total Price:</p>
          {displayTotalPrice(shifts)}
          <p>Total hours:</p>
          {Math.floor(
            shifts
              .map((shift) => Date.parse(shift.end) - Date.parse(shift.start))
              .reduce((previous, current) => previous + current, 0) /
              (1000 * 60 * 60)
          )}
          :
          {String(
            Math.floor(
              shifts
                .map((shift) => Date.parse(shift.end) - Date.parse(shift.start))
                .reduce((previous, current) => previous + current, 0) /
                (1000 * 60)
            ) % 60
          ).padStart(2, "0")}
          h
        </div>
      </div>
    </div>
  );
};

export default App;

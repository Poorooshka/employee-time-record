import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <label>
          Name
          <input value="" />
        </label>
        <label>
          Start Time
          <input type="datetime-local" value="" />
        </label>
        <label>
          End Time
          <input type="datetime-local" value="" />
        </label>
        <button>Save</button>
      </div>
    </div>
  );
};

export default App;

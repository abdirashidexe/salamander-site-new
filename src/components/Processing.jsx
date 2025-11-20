export default function Processing() {
  return (
    <main>
      <h2>Processing Page</h2>
      <div id="main-boxes">
        <div className="box">
          <h3>Target Color</h3>
          <input type="color"/>
          <button>Set Color</button>
        </div>

        <div className="box">
          <h3>Progress</h3>
          <progress value={30} max={100}></progress>
          <button>Get Status</button>
        </div>

        <div className="box">
          <h3>Threshold</h3>
          <input type="number"/>
          <button>Set Threshold</button>
        </div>
      </div>
    </main>
  );
}

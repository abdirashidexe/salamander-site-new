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
          <h3>Video</h3>
          <textarea></textarea>
          <button>Choose Videos</button>
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

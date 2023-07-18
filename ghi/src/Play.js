import logo from "./attack-on-python-logo.png";

function Play() {
  return (
    <div>
      <div className="text-center" style={{ padding: 15 }}>
        <h1> Attack on Python </h1>
      </div>

      <div className="text-center">
        <img src={logo} alt="Logo" style={{ width: "500px" }}></img>
      </div>

      <div className="bg-light" style={{ padding: 35 }}>
        <h2 className="text-center">Question goes here?</h2>
        <div className="row text-center">
          <div className="col">
            <p>
              <button type="button" className="btn btn-dark">
                Option 1
              </button>
            </p>
          </div>
          <div className="col">
            <p>
              <button type="button" className="btn btn-dark">
                Option 2
              </button>
            </p>
          </div>
          <div className="col">
            <p>
              <button type="button" className="btn btn-dark">
                Option 3
              </button>
            </p>
          </div>
          <div className="col">
            <p>
              <button type="button" className="btn btn-dark">
                Option 4
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;

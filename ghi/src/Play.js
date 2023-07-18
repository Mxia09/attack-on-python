import React from "react";
import wizard from "./images/wizard.png";

function Play() {
  return (
    <div>
      <div className="text-center" style={{ padding: 15 }}>
        <h1> Attack on Python </h1>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ position: "relative" }}
      >
        <img
          className="image"
          src={wizard}
          alt="Logo"
          style={{ width: "200px" }}
        />
      </div>

      <div style={{ padding: 35 }}>
        <h2 className="text-center">Question goes here?</h2>
        <div className="row text-center" style={{ padding: 10 }}>
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

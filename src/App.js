import React from "react";
import "./App.css";
import ar from "./assets/ar.svg";
import QRCode from "react-qr-code";
import { isMobile } from "./utils/internal_utils";

function App() {
  const ARContent = () => {
    if (isMobile.iOS()) {
      return (
        <a href="./custom/model.usdz" rel="ar">
          <img className="App-ar-image" src={ar} alt="AR Icon" />
        </a>
      );
    } else if (isMobile.Android()) {
      return (
        <img
          className="App-ar-image"
          src={ar}
          alt="AR Icon"
          onClick={() => {
            window.open("./custom/model.glb");
          }}
        />
      );
    } else {
      return <img className="App-ar-image" src={ar} alt="AR Icon" />;
    }
  };

  return (
    <div className="App">
      <div className="App-left-part">
        {isMobile.any() ? (
          <p className="App-header">Click to Dive In</p>
        ) : (
          <QRCode className="App-qr" value={window.location.href} size={150} />
        )}

        <ARContent />
      </div>
      <img
        className="App-image-style"
        src={"./custom/AR_preview.png"}
        alt="AR Preview"
      />
    </div>
  );
}

export default App;

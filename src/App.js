import './App.css';
import ar from "./assets/ar.svg"
import QRCode from  "react-qr-code";
import {isMobile} from "./utils/internal_utils";
function App() {
  return (
    <div className="App" onClick={()=> onClick()}>
        <div className="App-left-part">
            {isMobile.any() ?    <p className="App-header">
                    Click
                    to Dive In
                </p>

                :  <QRCode className="App-qr" value={window.location.href} size={150}/>}

            <img className="App-ar-image" src={ar}/>
        </div>
      <img className="App-image-style" src={"./custom/preview_image.png"}/>
    </div>
  );
}

function onClick(){
    // window.open("./custom/model.usdz")
    if(isMobile.any()){
        if(isMobile.iOS()){
            window.open("./custom/model.usdz")
        }
        else {
            window.open("./custom/model.glb")
        }
    }
}
export default App;

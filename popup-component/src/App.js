import { useState, useEffect } from 'react';
import './App.css';
import Popup from './components/Popup';

function App() {

  const [buttonPopup, setButtonPopup] = useState(false)
  const [timedPopup, setTimedPopup] = useState(false);
  

  const popupShow = () => {
    setButtonPopup(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  },[])
  
  return (
    <div className="App">
      <main>
        <h1>Pop Up Component</h1>
        <br />
        <br />
        <button onClick={popupShow}>Open PopUp</button>
      </main>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>My Pop up</h3>
        <p>This is my button triggered popup</p>
      </Popup>

      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>My Timed Popup</h3>
        <p>This is my timed triggered popup</p>
      </Popup>
    </div>
  );
}

export default App;

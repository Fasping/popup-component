import './App.css';
import Popup from './components/Popup';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Pop Up Component</h1>
        <br />
        <br />
        <button>Open PopUp</button>
        <Popup trigger={false}>My Pop up </Popup>
      </main>
    </div>
  );
}

export default App;

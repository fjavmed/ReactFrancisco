import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
            Aquí se está construyendo la APP de Francisco
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>                      
        </div>
      </header>
    </div>
  );
}

function CardComponent(){
return (
  <div>
    <h2>Ideas</h2>
  </div>
)

}

export default App;

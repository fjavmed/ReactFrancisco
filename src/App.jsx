  import logo from './logo.svg';
  import './App.css';
  import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
  import Navbar from './components/navegacion/Navbar'
  import Inicio from './components/pages/Inicio'
  import Contacto from './components/pages/Contacto'
  import Redes from './components/pages/Redes'
  import { HomeContainer } from './containers/HomeContainer';
  import "../node_modules/bootstrap/dist/css/bootstrap.css"

 
  function App() {
    
    return (
      <div className="App">  
     
    <HomeContainer />
     
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Inicio}/>
            <Route path='/contacto' component={Contacto}/>
            <Route path='/redes' component={Redes}/>
          </Switch>
        </Router>
        
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
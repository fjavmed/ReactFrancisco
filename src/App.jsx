  import logo from './logo.svg';
  import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
  import Navbar from './components/navegacion/Navbar'
  import Inicio from './components/pages/Inicio'
  import Contacto from './components/pages/Contacto'
  import Redes from './components/pages/Redes'
  import { ItemCount } from './components/itemCount'
  import "../node_modules/bootstrap/dist/css/bootstrap.css"
  import './App.css';
  import CardComponent from './components/CardComponent'
  import NavbarComponent from './components/NavbarComponent';
  
   function App() {
    
    return (
      <div className="App" >  
                
                           
    <NavbarComponent /> 
 
        <Router>
          <Navbar/>

          <Switch>
            <Route path='/' exact component={Inicio}/>
            <Route path='/contacto' component={Contacto}/>
            <Route path='/redes' component={Redes}/>
          </Switch>
        </Router>

         Agrega Al carro 
        <ItemCount />
   <CardComponent/>   
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
              Aquí se está construyendo la APP de Francisco                             
          </div>
          
        </header>
      </div>
    );
  }

  export default App;
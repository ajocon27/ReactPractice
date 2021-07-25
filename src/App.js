// import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Navigation} from './Navigation';
import {Cart} from './Cart'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import{Login} from './Login'
import { Register } from './Register';




function App() {
 
  // if(!token) {
  //   return <Login setToken={setToken} />
    
  // }
  return (
    <BrowserRouter>
    <div className="container">
      <Navigation/>
        <Switch>
          <Route path="/" component={Home} exact/>  
          <Route path="/cart" component={Cart}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

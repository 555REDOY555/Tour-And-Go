import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Servises from './Components/Servises/Servises';
import Shipping from './Components/Shipping/Shipping';
import Order from './Components/Order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Servises></Servises>
          </Route>
          <Route path="/servise" >
            <Servises></Servises>
          </Route>
          <Route path='/booking/:id' >
            <Shipping></Shipping>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;

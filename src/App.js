import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Servises from './Components/Servises/Servises';
import Shipping from './Components/Shipping/Shipping';
import Order from './Components/Order/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyOrder from './MyOrder/MyOrder';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/LogIn/Login';
import PrivatRoute from './Components/PrivatRoute/PrivatRoute';
import AddUser from './AddUser/AddUser';
import Alluser from './Alluser/Alluser';
import About from './Aboit/About';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Servises></Servises>
            </Route>
            <Route path="/servise" >
              <Servises></Servises>
            </Route>
            <PrivatRoute path='/booking/:id' >
              <Shipping></Shipping>
            </PrivatRoute>
            <PrivatRoute path="/order">
              <Order></Order>
            </PrivatRoute>
            <PrivatRoute path="/MyOrder" >
              <MyOrder></MyOrder>
            </PrivatRoute>
            <PrivatRoute path="/About" >
              <About></About>
            </PrivatRoute>
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/allServ" >
              <Alluser></Alluser>
            </Route>
            <Route path="/addUser" >
              <AddUser></AddUser>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CreateForm from './components/CreateForm';
import AllProducts from './components/AllProducts';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import ShowOne from './components/ShowProduct';
function App() {
  return (
    
    <div className="App container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <CreateForm></CreateForm>
        <hr/>
        <AllProducts></AllProducts>
        </Route>
        <Route exact path="/show/:id">
          <ShowOne></ShowOne>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

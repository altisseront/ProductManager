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
import EditOne from './components/EditProduct';
import React, {useState} from 'react';
function App() {
  const [newProdToggle, setNewProdToggle] = useState(false);
  return (
    
    <div className="App container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <CreateForm newProdToggle={newProdToggle}  setNewProdToggle={setNewProdToggle}></CreateForm>
        <hr/>
        <AllProducts newProdToggle={newProdToggle}></AllProducts>
        </Route>
        <Route exact path="/show/:id">
          <ShowOne></ShowOne>
        </Route>
        <Route exact path="/edit/:id">
          <EditOne></EditOne>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

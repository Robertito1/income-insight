import { Routes, Route } from 'react-router'

import Login from './pages/login'
import SignUp from './pages/signUp'
import SelectService from './pages/selectService'
import Dashboard from './pages/dashboard'

import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" render={() => <Login />} />
          <Route exact path="/signup" component={() => <SignUp />} /> 
          <Route exact path="/select-service" component={() => <SelectService />} /> 
          <Route exact path="/dashboard" component={() => <Dashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import SignUp from './pages/signUp'
import SelectService from './pages/selectService'
import Dashboard from './pages/dashboard'

import './App.css';

function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} /> 
          <Route exact path="/select-service" element={<SelectService />} /> 
          <Route exact path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </div>
  );
}

export default App;

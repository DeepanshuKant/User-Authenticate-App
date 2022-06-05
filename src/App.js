import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './component/Navbar/Navbar';


//Pages import
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Mainpage } from './pages/mainpage/Mainpage';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Kyc } from './pages/KYC/Kyc';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/mainpage' element={<Mainpage />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/kyc' element={<Kyc />} />
        </Routes>

      </>
    </Router >
  );
}

export default App;


import './App.css';
import { Home, Login, Public } from './containers/public/';
// import { Routes, Route } from 'react-router-dom';
import path from './ultils/path';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';



function App() {
  return (
    <>
      <div>
      <Navbar/>
        <Routes>
          <Route path={path.HOME} exact element={<Home></Home>} />
          <Route path= {path.LOGIN} element={<Login></Login>} />
          <Route path={path.PUBLIC} element={<Public></Public>} />
        </Routes>
      </div>
      
    </>
  
  );
}

export default App;

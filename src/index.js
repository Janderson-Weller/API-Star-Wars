import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import People from './components/pages/People/People';
import Films from './components/pages/Films/Films';
import Planets from './components/pages/Planets/Planets';
import Species from './components/pages/Spacies/Species';
import Vehicles from './components/pages/Vehicles/Vehicles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/people' element={<People />} />
                <Route path='/films' element={<Films />} />
                <Route path='/planets' element={<Planets />} />
                <Route path='/species' element={<Species />} />
                <Route path='/vehicles' element={<Vehicles />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

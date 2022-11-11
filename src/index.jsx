import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React    from 'react';
import ReactDOM from 'react-dom/client';
import App      from './App';
import Films    from './components/pages/Films/Films';
import People   from './components/pages/People/People';
import Planets  from './components/pages/Planets/Planets';
import Vehicles from './components/pages/Vehicles/Vehicles';
import Species  from './components/pages/Spacies/Species';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route exact path='/films' element={<Films />} />
                <Route exact path='/people' element={<People />} />
                <Route path='/planets' element={<Planets />} />
                <Route path='/vehicles' element={<Vehicles />} />
                <Route path='/species' element={<Species />} />
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

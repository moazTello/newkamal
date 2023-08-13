import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <Router>
              <Routes>
                <Route path='/*' element={<App 
                // defaultZoom={7} places={places} 
                />}/>
              </Routes>
        </Router>
    </AuthProvider>
  </React.StrictMode>
);

import React from 'react';
import './styles/app.scss'
import Canvas from './component/Canvas';
import Settingbar from './component/Settingbar';
import Toolbar from './component/Toolbar';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Routes>
          <Route
            path=":id"
            element={
              <>
                <Toolbar/>
                <Settingbar/>
                <Canvas/>
              </>
            }
    />
    <Route path="*" element={<Navigate  to={`f${(+new Date()).toString(16)}`} />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

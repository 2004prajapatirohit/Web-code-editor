import './App.css';
import './index.css';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import EditorPage from './components/EditorPage';
function App() {
  return (
    <div className="App">
      <Toaster
      position='top-right'
      toastOptions={{
        success:{
          theme:{
            primary: '#4aed88',
          },
        },
      }}
      >
      </Toaster>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>Home</Route>
          <Route path='/editor/:id' element={<EditorPage/>}>Editor</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

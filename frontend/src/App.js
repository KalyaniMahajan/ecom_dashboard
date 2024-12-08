import './App.css';
import Nav from './Nav.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route path='/' element={<h1>Product Compo</h1>}></Route>
          <Route path='/add' element={<h1>Add Product Compo</h1>}></Route>
          <Route path='/update' element={<h1>Update Product Compo</h1>}></Route>
          <Route path='/Logout' element={<h1>Logout Compo</h1>}></Route>
          <Route path='/Profile' element={<h1>Profile Compo</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

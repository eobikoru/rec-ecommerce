import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import LayoutWrapper from './layout';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={    <LayoutWrapper>
           <Home />
        </LayoutWrapper> } />
        <Route path="/product/:id" element={
           <LayoutWrapper>
             <Product/>
           </LayoutWrapper>
       } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

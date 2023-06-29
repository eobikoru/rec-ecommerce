// import './App.css';
// import BannerDesign from './body/BannerDesign';
// import Items from './body/Items';
// import Ads from './body/ads/Ads';
// import Terms from './footer/Terms';



// const App = () => {
//   return (
//     <div>
//       <BannerDesign />
//       <Items />
//       <Ads />
//       <Terms />
//     </div>
//   )
// }

// export default App











import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
// import LayoutWrapper from './layout';
import Wrapper from "./layout/Wrapper";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={   <Wrapper>
           <Home />
        </Wrapper> } />
        <Route path="/product/:id" element={
           <Wrapper>
             <Product/>
           </Wrapper>
       } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

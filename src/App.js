import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/Home.component";

import Navigation from './Routes/Navigation/Navigation.component'
import Authentication from "./Routes/Authentication/Authentication.components";
import Shop from './Routes/Shop/Shop.component'
import CheckOut from "./Routes/checkout/CheckOut.component";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path="checkout" element={<CheckOut/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

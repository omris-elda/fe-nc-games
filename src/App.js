import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Header, NavBar, Reviews, Home, Categories
} from "./components"


function App() {


  return (
    <div className="App">

      <Header />
      <NavBar />

      {/* routing goes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/:category" element={<Reviews />} />
      </Routes>

    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import {
  Header, NavBar, Reviews, Home
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

      </Routes>

    </div>
  );
}

export default App;

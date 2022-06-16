import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from "./Footer"
import RusAdult from "./RusAdult"
import Math1 from "./Math1"
import Math2 from "./Math2"


function NotFound() {
  return <h2>Not found</h2>;
}

function Nav(){
  return(
    <div>
    <Link to="/" className="nav">Русский для взрослых</Link>
    <Link to="/math1" className="nav">Математика 1 класс</Link>
    <Link to="/math2" className="nav">Математика 2 класс</Link>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
               <Route path="/" element={<RusAdult />} />
               <Route path="/math1" element={<Math1 />} />
               <Route path="/math2" element={<Math2 />} />
         
            <Route element={NotFound} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
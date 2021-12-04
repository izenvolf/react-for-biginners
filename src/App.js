import {useState, useEffect} from "react";
import Movie from "./components/Movie";
import{
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return(
    <Router> 
            <Routes basename={process.env.PUBLIC_URL}>
                <Route path='/movie/:id' element={<Detail/>} />
                <Route path='/movie' element={<Detail/>} />
                <Route path='/' element={<Home/>} />
            </Routes>
    </Router>
    );
}


export default App;
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

const App = () => {
    return(<>
    <div className="App">
        <Routes>
            <Route exact path="/booking-app-ui-React" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotel" element={<Hotel />} />
        </Routes>
    </div>
    </>)
}

export default App;
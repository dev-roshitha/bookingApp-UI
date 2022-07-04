import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/Home'
import List from './pages/list/List'
import Hotel from './pages/hotel/Hotel'

const App = () => {
    return(<>
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="https://ranasinghe98.github.io/booking-app-ui-React/" element={<Home />} />
                <Route path="https://ranasinghe98.github.io/booking-app-ui-React/hotels" element={<List />} />
                <Route path="https://ranasinghe98.github.io/booking-app-ui-React/hotels/:id" element={<Hotel />} />
            </Routes>
        </BrowserRouter>
    </div>
    </>)
}

export default App;
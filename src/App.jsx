import React from 'react';
import './App.css';
import Whitening from './pages/whitening/Whitening.jsx';
import Home from './pages/home/Home.jsx';
import Appointments from './pages/appointments/Appointments.jsx';
import Cavities from './pages/cavities/Cavities.jsx';
import Navigation from './components/navigation/./Navigation.jsx';
import { Routes, Route } from 'react-router-dom';

//     Maak ten slotte de button op de cavitiespagina functioneel, door de volgende acties te ondernemen:
//     Maak een eigen, externe clickHandler-functie;
// Zorg ervoor dat deze functie wordt aangeroepen wanneer er op de button geklikt wordt;
// Zorg ervoor dat wanneer deze functie wordt aangeroepen, er "We gaan direct door naar de afspraken pagina!" wordt gelogd in de console;
// Stuur de gebruiker daarna door naar de appointmentspagina;
function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tanden-bleken" element={<Whitening/>}/>
                <Route path="/afspraken" element={<Appointments/>}/>
                <Route path="/gaatjes" element={<Cavities/>}/>
            </Routes>
        </>
    );
}

export default App;
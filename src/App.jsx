import './App.css';
import Navbar from './components/navbar';
import BookingForm from './components/BookingForm';
import AboutSection from './components/AboutSection';
import UsageSection from './components/UsageSection';
import Register from './components/Register';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={
                    <>
                        <BookingForm />
                        <AboutSection />
                        <UsageSection />
                    </>
                } />
            </Routes>
        </Router>
    )
}

export default App;

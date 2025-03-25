import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Auth/components/Register";
import Login from "./Auth/components/Login";
import Dashboard from "./Auth/components/Dashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;

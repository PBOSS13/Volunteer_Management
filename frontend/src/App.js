import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import VolunteersPage from "./pages/VolunteersPage";
import NewVolunteerPage from "./pages/NewVolunteerPage";
import EditVolunteerPage from "./pages/EditVolunteerPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/volunteers" element={<VolunteersPage />} />
            <Route path="/volunteers/new" element={<NewVolunteerPage />} />
            <Route path="/volunteers/:id/edit" element={<EditVolunteerPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Resources from "./components/Resources/Resources";
import Partners from "./components/Partners/Partners";
import Sponsors from "./components/Sponsors/Sponsors";
import Archive from "./components/Archive/Archive";
import Newsletters from "./components/Archive/Newsletters/Newsletters";
import Merch from "./components/Merch/Merch";
import Games from "./components/Games/Games";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/archive/newsletters" element={<Newsletters />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </Router>
    );
};

export default App;

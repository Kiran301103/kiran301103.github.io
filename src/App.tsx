import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Nav from "./components/Nav";
import CustomCursor from "./components/Cursor";
import Contact from "./Contact";
import Works from "./Works";
import Resume from "./Resume";
// import InfoFooter from "./components/InfoFooter";

function App() {
    return (
        <HashRouter>
            <video autoPlay muted loop src="background.webm" className="fixed top-0 left-0 w-full h-full object-cover z-0" />
            <div className="fixed top-0 left-0 w-full h-full text-white z-10 overflow-x-scroll">
                <Nav />
                <CustomCursor />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            {/* <InfoFooter header="Ready to Hire?" content="Hire me"/> */}
            </div>
        </HashRouter>
    );
}

export default App;

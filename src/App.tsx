import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/homepage.tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Navbar from "./pages/navbar.tsx";
import {useMantineTheme} from "@mantine/core";

function App() {
    const theme = useMantineTheme();

    // gradient background for the entire website
    document.body.style.background = `linear-gradient(to left, ${theme.colors.purpleColors[1]} 0%, ${theme.colors.purpleColors[0]} 100%)`;

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/ovh-website" element={<Navbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="projects" element={<Projects/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

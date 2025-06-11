import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage.tsx";
import Navbar from "./components/navbar.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/ovh-website" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path={"resume"} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

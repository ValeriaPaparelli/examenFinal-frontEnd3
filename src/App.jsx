import "./App.css";
import Home from "./components/pages/Home/Home";
import Dentist from "./components/pages/Dentist/Dentist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/pages/Contact/Contact";
import Favs from "./components/pages/Favs/Favs";
import { AppLayout } from "./components/Layout/AppLayout/AppLayout";
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/dentista/:id" element={<Dentist />} />
              <Route path="/favoritos" element={<Favs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContextProvider>
  );
}

export default App;

import Navbar from "./components/Navbar";
// public pages
import Home from "./pages/public/Home";
import Landing from "./pages/public/Landing";
import PublicLayout from "./pages/public/PublicLayout";
import Services from "./pages/public/Services";
import Doctors from "./pages/public/Doctors";
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Landing />} />
          <Route path="services" element={<Services />} />
          <Route path="doctors" element={<Doctors />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
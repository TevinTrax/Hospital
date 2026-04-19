import Navbar from "./components/Navbar";
import Home from "./pages/public/Home";
import Landing from "./pages/public/Landing";
import PublicLayout from "./pages/public/PublicLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
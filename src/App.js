
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Success from "./pages/Success";
import Unsuccess from "./pages/Unsuccess";
import DontMatch from "./pages/DontMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Success />} />
      <Route path="/unsuccess" element={<Unsuccess />} />
      <Route path="/dontmatch" element={<DontMatch />} />
    </Routes>
  );
}

export default App;

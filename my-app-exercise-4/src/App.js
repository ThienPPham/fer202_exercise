import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise1 from "./pages/exercise1";
import Exercise2 from "./pages/exercise2";
import Exercise3 from "./pages/exercise3";
import Exercise4 from "./pages/exercise4";
import Exercise5 from "./pages/exercise5";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Exercise1 />} />
          <Route path="/Exercise2" element={<Exercise2/>}/>
          <Route path="/Exercise3" element={<Exercise3/>}/>
          <Route path="/Exercise4" element={<Exercise4/>}/>
          <Route path="/Exercise5" element={<Exercise5/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise1 from "./pages/exercise1";
import Exercise2 from "./pages/exercise2";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Exercise1 />} />
          <Route path="/Exercise2" element={<Exercise2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
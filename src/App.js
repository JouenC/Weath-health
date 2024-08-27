import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Employee from "./pages/Employee";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<ContactForm />} />
    </Routes>
  );
}

export default App;

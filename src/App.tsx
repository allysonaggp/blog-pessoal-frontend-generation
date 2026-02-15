import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/cadastro/cadastro";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h[80hv]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;

import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/ProdutcsPage";
import { AboutPage } from "./pages/About";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

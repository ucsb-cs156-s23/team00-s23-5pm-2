import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import InglewoodPage from "main/pages/InglewoodPage";
import SanFranciscoPage from "main/pages/SanFranciscoPage";
import DubaiPage from "main/pages/DubaiPage";
import RapidCityPage from "main/pages/RapidCityPage";
import LosAngelesPage from "main/pages/LosAngelesPage";
import BrisbanePage from "main/pages/BrisbanePage";
import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="/team00-s23-5pm-2">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/Inglewood" element={<InglewoodPage />} />
        <Route exact path="/towns/SanFrancisco" element={<SanFranciscoPage />} />
        <Route exact path="/towns/Dubai" element={<DubaiPage />} />
        <Route exact path="/towns/RapidCity" element={<RapidCityPage />} />
        <Route exact path="/towns/LosAngeles" element={<LosAngelesPage />} />
        <Route exact path="/towns/Brisbane" element={<BrisbanePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

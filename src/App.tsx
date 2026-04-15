import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posyandu from './pages/Posyandu';
import Posbindu from './pages/Posbindu';
import Login from './pages/Login';
import FormPtmLansia from './pages/FormPtmLansia';
import KeuanganPosbindu from './pages/KeuanganPosbindu';
import KeuanganPosbinduNonSubsidi from './pages/KeuanganPosbinduNonSubsidi';
import KeuanganPkk from './pages/KeuanganPkk';
import KeuanganPosyandu from './pages/KeuanganPosyandu';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posyandu" element={<Posyandu />} />
          <Route path="posbindu" element={<Posbindu />} />
          <Route path="form-ptm-lansia" element={<FormPtmLansia />} />
          <Route path="keuangan-posbindu" element={<KeuanganPosbindu />} />
          <Route path="keuangan-posbindu-non-subsidi" element={<KeuanganPosbinduNonSubsidi />} />
          <Route path="keuangan-pkk" element={<KeuanganPkk />} />
          <Route path="keuangan-posyandu" element={<KeuanganPosyandu />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

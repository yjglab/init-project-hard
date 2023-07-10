import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

const App = () => (
  <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/*" element={<NotFound />} /> */}
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default App;

import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Maps from "../Social/Maps/Maps";
import Main from "../Layout/Main/Main";
import App from "../../App";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/Page404/Page404";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/map" element={<Maps />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Page404 />} />

      </Routes>
    </div>
  );
}

export default Routing;

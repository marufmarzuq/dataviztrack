import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="design" element={<>Design Page</>} />
      <Route path="*" exact={true} element={<p>Not Found</p>} />
    </Routes>
  );
};

export default Router;

import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<>Welcome Home</>} />
      <Route path="design" element={<>Design Page</>} />
      <Route path="*" exact={true} element={<p>Not Found</p>} />
    </Routes>
  );
};

export default Router;

import { Route, Routes } from "react-router-dom";
import Home from "../../pages/dashboard/views/home";
import NotFound from "../../pages/dashboard/views/NotFound";
import Dashboard from "../../pages/dashboard/Dashboard.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Dashboard />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

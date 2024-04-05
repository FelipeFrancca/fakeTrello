import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard.jsx";
import Home from "../../pages/dashboard/views/Home.jsx";
import NotFound from "../../pages/dashboard/views/components/NotFound.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/fakeTrello" element={<Dashboard />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

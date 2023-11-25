import { Route, Routes } from "react-router-dom";
import List from "../../pages/dashboard/views/components/List.jsx";
import NotFound from "../../pages/dashboard/views/NotFound";
import Dashboard from "../../pages/dashboard/Dashboard.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="" element={<Dashboard />}>
        <Route path="" element={<List />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

import ProtectedRouteWrapper from '../components/ProtectedRouteWrapper';
import { Route, Routes } from 'react-router-dom';
import DashboardDrawer from '../layout/DashboardLayout';
import { Routes as RoutePath } from '../constant';
import ProductComponent from '../components/ProductComponent';

function ProtectedRoutes() {
  return (
    <Routes>
      <Route element={<DashboardDrawer />}>
        <Route element={<ProtectedRouteWrapper />}>
          <Route
            path={RoutePath.protected.product}
            element={<ProductComponent />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default ProtectedRoutes;

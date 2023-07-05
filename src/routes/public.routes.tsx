import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import FallbackLoader from '../components/FallbackLoader';
import { Routes as RoutePath } from '../constant';
import DashboardDrawer from '../layout/DashboardLayout';
import Home from '../components/Home';

function PublicRoutes() {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <Routes>
        <Route element={<DashboardDrawer />}>
          <Route path={RoutePath.home} element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default PublicRoutes;

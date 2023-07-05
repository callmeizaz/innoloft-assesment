import React from 'react';
import { useLocation, matchPath, Outlet, Navigate } from 'react-router-dom';

import { RESTRICTED_PROTECTED_ROUTES } from '../../constant/AccessControls';
import { PROTECTED_ROUTES, Routes as routes } from '../../constant';

// public routes => any user can access like login page
// authenticated routes => only logged in user can access like dashboard page

const AccessControlWrapper = () => {
  const { pathname } = useLocation();
  const restrictedRoutes = RESTRICTED_PROTECTED_ROUTES.admin;
  const cannotAccess = !!restrictedRoutes.some(
    (loc) => !!matchPath({ path: loc }, pathname)
  );
  const protectedPageChecker = !!PROTECTED_ROUTES.some(
    (loc) => !!matchPath({ path: loc }, pathname)
  );

  return cannotAccess ? (
    <Navigate to={routes.protected.accessDenied} />
  ) : !cannotAccess && !protectedPageChecker ? (
    <Navigate to={routes.protected.pageNotFound} />
  ) : (
    <>
      <Outlet />
    </>
  );
};

export default AccessControlWrapper;

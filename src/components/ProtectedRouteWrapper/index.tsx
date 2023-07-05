import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRouteWrapper() {
    const isLoggedIn = true; // Replace with your actual authentication check

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRouteWrapper;

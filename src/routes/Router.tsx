import ProtectedRoute from './protected.routes';
import PublicRoutes from './public.routes';
import { Fragment } from 'react';

const Router = () => {
    return (
        <Fragment>
            <PublicRoutes />
            <ProtectedRoute />
        </Fragment>
    );
};

export default Router;

import {Authenticated, Unauthenticated} from "convex/react";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export default function ProtectedRoute() {
    const location = useLocation()
    return (
        <>
            <Authenticated>
                {location.pathname === '/' ? <Navigate to="/dashboard" /> : <Outlet /> }
            </Authenticated>

            <Unauthenticated>
                <Navigate to="/" replace />
            </Unauthenticated>
        </>
    );
}
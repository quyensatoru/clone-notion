import {Authenticated, Unauthenticated} from "convex/react";
import {Navigate, Outlet, useLocation} from "react-router-dom";

export default function AuthRoute() {
    const location = useLocation()
    return (
        <>
            <Authenticated>
                {location.pathname === '/' && <Navigate to="/dashboard" />}
            </Authenticated>

            <Unauthenticated>
                <Navigate to="/" />
            </Unauthenticated>

            <Outlet />
        </>
    );
}
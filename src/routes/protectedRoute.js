import {Authenticated, Unauthenticated} from "convex/react";
import {Navigate} from "react-router-dom";

export default function ProtectedRoute({ children }) {
    return (
        <>
            <Authenticated>{children}</Authenticated>

            {/* Nếu chưa đăng nhập ⇒ chuyển hướng đến trang /sign-in */}
            <Unauthenticated>
                <Navigate to="/sign-in" replace />
            </Unauthenticated>
        </>
    );
}
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigateBar from "../components/layouts/navbar";
import Landing from "../pages/landing";
import AuthRoute from "./authRoute";
import Dashboard from "../pages/dashboard";
import Page from "../pages/page";

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthRoute />}>
                    <Route index element={<Landing />} />
                    <Route element={<NavigateBar />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="page" element={<Page />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
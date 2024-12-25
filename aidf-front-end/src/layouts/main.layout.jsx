import Navigation from "@/components/shared/Navigation.jsx";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
}

export default MainLayout;

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

function ProtectedRoute() {
    const { session } = useAuth();
    if (!session) {
        return <Navigate to="/login" replace/>;
    }
    return <Outlet/>;
}
export default ProtectedRoute;
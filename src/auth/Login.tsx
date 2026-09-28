import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <main>
            <h1>CampusCare Login</h1>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (!name.trim()) {
                        return;
                    }
                    login(name.trim());
                    const from =
                        location.state?.from?.pathname || "/appointments";
                    navigate(from, { replace: true });
                }}
            >
                <label>
                    Student Name
                    <input
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <button type="submit">Sign In</button>
            </form>
        </main>
    );
}
export default Login;
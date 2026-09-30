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
            <section>
                <h1>CampusCare Login</h1>
                <p className="login-message">
                    Sign in to manage your appointments.
                </p>
                <form className="login-form"
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
                    <div className="login-field">
                        <label htmlFor="student-name">
                            Student Name
                            <input
                                id="student-name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </label>
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </section>
        </main>
    );
}
export default Login;
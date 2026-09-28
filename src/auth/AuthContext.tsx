import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Session = {
    name: string;
};
type AuthContextType = {
    session: Session | null;
    login: (name: string) => void;
    logout: () => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(() => {
        const savedSession = localStorage.getItem("campus-care-session");
        return savedSession ? JSON.parse(savedSession) : null;
    });
    function login(name: string) {
        const newSession = { name };
        setSession(newSession);
        localStorage.setItem(
            "campus-care-session",
            JSON.stringify(newSession)
        );
    }
    function logout() {
        setSession(null);
        localStorage.removeItem("campus-care-session");
    }
    return (
        <AuthContext.Provider value={{ session, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}
export { AuthProvider, useAuth };
"use client";
// next
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
    SetStateAction,
    Dispatch,
    FormEvent,
} from "react";
import { useRouter } from "next/navigation";

// axios
import axios from "axios";

// context
import { usePopup } from "./PopupContext";

type AuthProviderProps = {
    children: ReactNode;
};

type User = {
    _id?: string;
    username: string;
    password: string;
    isAdmin: boolean;
};

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    handleRegister: (
        e: FormEvent<HTMLFormElement>,
        username: string,
        password: string
    ) => void;
    handleLogin: (
        e: FormEvent<HTMLFormElement>,
        username: string,
        password: string
    ) => void;
    handleLogout: () => void;
    error: string | null;
    loading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    const router = useRouter();

    const { openModal, showError } = usePopup();

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (token && user) {
            localStorage.setItem("token", token); // Save token
            localStorage.setItem("user", JSON.stringify(user)); // Save user as JSON
            setIsAuthenticated(true);
            router.push("/"); // Redirect to home or protected route
        } else {
            setIsAuthenticated(false);
        }
    }, [token, user, router]);

    useEffect(() => {
        if (token === null) {
            localStorage.removeItem("token");
            localStorage.removeItem("user"); // Clear user data on logout
            router.push("/");
        }
    }, [token, router]);

    const handleRegister = async (
        e: FormEvent,
        username: string,
        password: string
    ) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:3001/auth/register",
                {
                    username,
                    password,
                }
            );

            openModal("You have successfully \n signed up!");

            router.push("/signin");

            setToken(res.data.token);
            setUser(res.data.user);
            setError(null);
            setUsername("");
            setPassword("");
        } catch (err: any) {
            const errorMessage =
                err.res?.data?.message ||
                "Registration failed. Please try again.";

            // Activate the error popup with the error message
            showError(errorMessage);

            setUsername(""); // Reset username state
            setPassword(""); // Reset password state
        }
    };

    const handleLogin = async (
        e: FormEvent<HTMLFormElement>,
        username: string,
        password: string
    ) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/auth/login", {
                username,
                password,
            });
            setToken(res.data.token);
            setUser(res.data.user);
            setError(null); // Clear any previous errors
            setUsername(""); // Reset username state
            setPassword(""); // Reset password state
        } catch (err: any) {
            const errorMessage =
                err.res?.data?.message ||
                "Invalid credentials. Please try again.";

            // Activate the error popup with the error message
            showError(errorMessage);

            setUsername(""); // Reset username state
            setPassword(""); // Reset password state
        }
    };

    const handleLogout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                username,
                setUsername,
                password,
                setPassword,
                handleRegister,
                handleLogin,
                handleLogout,
                error,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// next
import { ReactNode } from "react";

// components
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// context
import AuthProvider from "@/context/AuthContext";
import PopupProvider from "@/context/PopupContext";

interface ProviderProps {
    children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
    return (
        <PopupProvider>
            <AuthProvider>
                <Nav />
                {children}
                <Footer />
            </AuthProvider>
        </PopupProvider>
    );
}

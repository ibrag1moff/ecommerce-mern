"use client";
import ErrorPopup from "@/components/ErrorPopup";
import Popup from "@/components/Popup";
import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";

const PopupContext = createContext({} as PopupContext);

export const usePopup = () => useContext(PopupContext);

type PopupProvider = {
    children: ReactNode;
};

type PopupContext = {
    modalActive: string | null;
    errorMessage: string | null;
    openModal: (message: string) => void;
    closeModal: () => void;
    showError: (message: string) => void;
    hideError: () => void;
};

export default function PopupProvider({ children }: PopupProvider) {
    const [modalActive, setModalActive] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const openModal = (message: string) => {
        setModalActive(message);
        setTimeout(() => setModalActive(null), 3000);
    };

    const closeModal = () => setModalActive(null);

    const showError = (message: string) => {
        setErrorMessage(message);
        setTimeout(() => setErrorMessage(null), 3000);
    };
    const hideError = () => setErrorMessage(null);

    return (
        <PopupContext.Provider
            value={{
                modalActive,
                errorMessage,
                openModal,
                closeModal,
                showError,
                hideError,
            }}
        >
            {children}
            {errorMessage && <ErrorPopup message={errorMessage} />}
            {modalActive && <Popup message={modalActive} />}
        </PopupContext.Provider>
    );
}

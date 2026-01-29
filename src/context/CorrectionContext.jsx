import { createContext, useState } from "react";

export const CorrectionContext = createContext(null);

export const CorrectionProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const correctText = async () => {
        if (!text.trim()) return;

        setLoading(true);
        setError(null);
        setResponse(null);
        
        try {
            const body = new URLSearchParams();
            body.append("language", "fr");
            body.append("text", text);

            const res = await fetch("/v2/check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: body.toString(),
            });

            if (!res.ok) {
                throw new Error("Erreur lors de la correction");
            }

            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CorrectionContext.Provider
            value={{
                text,
                setText,
                loading,
                error,
                response,
                correctText,
            }}
        >
            {children}
        </CorrectionContext.Provider>
    );
};

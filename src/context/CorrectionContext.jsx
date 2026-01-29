import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CorrectionContext = createContext(null);

export const CorrectionProvider = ({ children }) => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [response, setResponse] = useState(null);
    const [correctedText, setCorrectedText] = useState('');

    const correctText = async () => {
        setLoading(true);
        setError(false);

        try {
            const body = new URLSearchParams();
            body.append("language", "fr");
            body.append("text", text);

            const res = await fetch("/v2/check", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body
            });

            const json = await res.json();
            setResponse(json);

            if (json.matches && json.matches.length > 0) {
                let finalText = text;
                const sortedMatches = [...json.matches].sort((a, b) => b.offset - a.offset);
                sortedMatches.forEach(match => {
                    const replacement =
                        match.replacements && match.replacements.length > 0
                            ? match.replacements[0].value
                            : finalText.substring(match.offset, match.offset + match.length);

                    finalText =
                        finalText.slice(0, match.offset) +
                        replacement +
                        finalText.slice(match.offset + match.length);
                });
                setCorrectedText(finalText);
            } else {
                setCorrectedText(text);
            }
        } catch (err) {
            console.log(err);
            setError(true);
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
                correctedText,
                correctText
            }}
        >
            {children}
        </CorrectionContext.Provider>
    );
};

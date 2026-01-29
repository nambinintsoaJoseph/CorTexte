import { useContext } from "react";
import { CorrectionContext } from "../../context/CorrectionContext";
import CorrectionItem from "../CorrectionItem";
import Loader from "../Loader";

function PossibleCorrection() {
    const { loading, response, error, text } = useContext(CorrectionContext);

    // Nombre de corrections
    const correctionCount = response?.matches?.length || 0;

    return (
        <div className="p-4">
            {/* Titre + bulle */}
            <div className="flex items-center">
                <h2 className="font-outfit text-2xl font-semibold md:ml-8">
                    Corrections possibles
                </h2>

                {correctionCount > 0 && (
                    <div className="w-[32px] h-[32px] bg-[#DEBB5C] rounded-full text-white text-center p-1 ml-2">
                        {correctionCount}
                    </div>
                )}
            </div>

            {/* Contenu */}
            <div className="mt-4 h-[186px] overflow-y-scroll space-y-3 pr-4 scrollbar-thin">
                {loading && <Loader />}
                {error && (
                    <div className="text-red-500">Une erreur est survenue lors de la correction.</div>
                )}
                {!loading && !error && correctionCount === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        {/* Illustration SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-16 h-16 mb-4 text-green-cortexte"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>

                        <p className="text-gray-500 text-lg">Aucune correction détectée.</p>
                    </div>
                )}
                {!loading && !error && correctionCount > 0 && response.matches.map((match, index) => {
                    const motIncorrect = text.substring(match.offset, match.offset + match.length);
                    const remplacement =
                        match.replacements && match.replacements.length > 0
                            ? match.replacements[0].value
                            : "—";

                    return (
                        <CorrectionItem
                            key={`match-${index}`}
                            mot={motIncorrect}
                            message={match.message}
                            remplecement={remplacement}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PossibleCorrection;

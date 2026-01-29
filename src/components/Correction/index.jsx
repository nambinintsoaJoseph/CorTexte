import { useContext } from "react";
import { CorrectionContext } from "../../context/CorrectionContext";

function Correction() {
    const { correctedText } = useContext(CorrectionContext);

    return (
        <div className="p-4">
            <div>
                <h3 className="font-outfit text-2xl font-semibold">Correction finale</h3>
            </div>

            <div className="mt-4">
                <p className="pt-2 text-gray-800 whitespace-pre-line">{correctedText}</p>
            </div>
        </div>
    );
}

export default Correction;

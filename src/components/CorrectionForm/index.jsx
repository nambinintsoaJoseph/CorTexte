import { useContext } from "react";
import { CorrectionContext } from "../../context/CorrectionContext";

function CorrectionForm() {
    const { text, setText, correctText, loading } = useContext(CorrectionContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        correctText();
    };
    
    return (
        <div className="md:w-[50%]">
            <div className="p-4">
                <h3 className="font-outfit text-2xl font-semibold">
                    Votre texte
                </h3>
            </div>

            <form className="mx-4" onSubmit={handleSubmit}>
                <div className="mx-auto">
                    <textarea
                        className="w-full bg-[#F7F7F7] h-[186px] rounded-2xl border border-[#D4D4D4] p-4 outline-none resize-none text-black"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Saisissez votre texte ici..."
                    />
                </div>

                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-cortexte p-2 text-white rounded-2xl disabled:opacity-50"
                    >
                        <i className="fa fa-check"></i>{" "}
                        {loading ? "Correction..." : "Corriger"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CorrectionForm;

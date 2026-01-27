import { useEffect, useState } from "react";

function CorrectionForm() {

    const [text, setText] = useState(''); 

    useEffect(() => {
        console.log(text)
    }, [text]); 

    return (
        <div className="md:w-[50%]">
            <div className="p-4">
                <h3 className="font-outfit text-2xl font-semibold">Votre texte</h3>
            </div>

            <div>
                <form className="mx-4">
                    <div className="mx-auto">
                        <textarea 
                            className="w-full bg-[#F7F7F7] h-[186px] rounded-2xl border border-[#D4D4D4]"
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                        <button className="bg-green-cortexte p-2 text-white rounded-2xl">
                            <i className="fa fa-pen"></i> Corriger
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CorrectionForm; 
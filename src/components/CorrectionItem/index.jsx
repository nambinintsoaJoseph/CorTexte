function CorrectionItem({mot, message, remplecement}) {
    return (
        <div className="border border-[#D4D4D4] p-4 rounded-2xl my-1">
            <div className="flex space-x-4 py-2">
                <div className="w-2 h-2 rounded-[50%] bg-[#DEBB5C] self-center"></div>
                <div>
                    <p className="font-inter font-normal text-sm">{mot}</p>
                </div>
            </div>

            <div className="py-2">
                <p className="font-inter text-sm">
                    {message}
                </p>
            </div>

            <div>
                <p>Remplacement possible : {remplecement}</p>
            </div>
        </div>
    )
}

export default CorrectionItem; 
function Footer() {

    const date = new Date();

    return (
        <div className="bg-green-cortexte p-4 mt-2 text-white text-center">
            <div>
                <h2 className="font-outfit text-2xl font-semibold">CorTexte</h2>
                <p className="p-4">Votre assistant de correction orthographique et grammaticale pour un français précis et professionnel.</p>
            </div>

            <div className="w-[80%] h-1 bg-white rounded-sm mx-auto"></div>

            <div className="pt-6">
                <p>© {date.getFullYear()} CorTexte — Tous droits réservés.</p>
            </div>
        </div>
    )
}   

export default Footer; 
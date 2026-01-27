import './loader.css';

function Loader() {
    return (
        <div className='p-4 w-fit'>
            <div className="loader mx-auto"></div>

            <div className='mt-2'>
                <p className='text-lg'>Traitement en cours...</p>
            </div>
        </div>
    );
}

export default Loader; 
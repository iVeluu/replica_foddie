
export default function Email() {
    return (
        <section className="max-w-6xl mx-auto bg-secondary mt-20 flex flex-col gap-12 items-center rounded-[2rem]">
            <h2 className="font-medium text-5xl leading-normal text-center mt-28">Delicias en tu correo</h2>
            <p className="text-center">Suscríbete para recibir recetas deliciosas, consejos culinarios e inspiración gastronómica <br /> directamente en tu correo electrónico.</p>
            <div className="flex justify-between items-center gap-5 bg-white px-3 py-2 mb-28 w-[700px] rounded-xl">
                
                <input 
                    type="email" 
                    className="flex-1 font-medium ml-9 py-2 outline-none"
                    placeholder="Tu correo electrónico"
                />
                <button className="bg-black text-white px-7 py-5 rounded-xl w-48 text-sm font-medium">
                    Suscríbete
                </button>
            </div>

        </section >
    )
}

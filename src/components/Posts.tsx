
export default function Posts() {
    return (

        <div className="mt-20 py-32 bg-gradient-to-t from-blue-100/70 to-slate-0">
            <div className="flex flex-col items-center gap-7 max-w-6xl mx-auto">
                <h2 className="font-medium text-5xl leading-normal text-center">
                    Echa un vistazo a @foodiexyz en <br />
                    <span className="text-coralC font-bold">Instagram</span>
                </h2>
                <p className="text-center">¡Inspírate con fotografías deliciosas, recetas deliciosas y consejos de cocina para <br /> mejorar tus habilidades culinarias! </p>

                <div className="grid grid-cols-4 gap-5 mt-5">
                    <img src="https://foodiex-yz.netlify.app/img/post-instagram-1.png" alt="" />
                    <img src="https://foodiex-yz.netlify.app/img/post-instagram-2.png" alt="" />
                    <img src="https://foodiex-yz.netlify.app/img/post-instagram-3.png" alt="" />
                    <img src="https://foodiex-yz.netlify.app/img/post-instagram-4.png" alt="" />
                </div>
            </div>

        </div>

    )
}

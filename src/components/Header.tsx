import { CgInstagram, CgFacebook, CgAdidas } from "react-icons/cg";



export default function Header() {
    return (
        <header className="flex justify-between py-8 px-6 border-b-2 border-black/5 items-center">
            <h1 className=" text-2xl font-bold">FoodieVlx</h1>
            <div className="flex gap-7 text-md font-medium ">
                <button className="hover:font-bold hover:underline">Inicio</button>
                <button className="hover:font-bold hover:underline">Recetas</button>
                <button className="hover:font-bold hover:underline">Blog</button>
                <button className="hover:font-bold hover:underline">Contacto</button>
                <button className="hover:font-bold hover:underline">Nosotros</button>
            </div>
            <div className=" flex gap-5 ">
                <CgFacebook />
                <CgInstagram />
                <CgAdidas />
            </div>
        </header>
    )
}

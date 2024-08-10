import Categories from "./components/Categories";
import Footer from "./components/Footer"
import Header from "./components/Header"
import { AiTwotoneFire, AiFillClockCircle, AiOutlineFork, AiFillPlayCircle } from "react-icons/ai";
import Recipes from "./components/Recipes";
import Chef from "./components/Chef";
import Posts from "./components/Posts";
import Email from "./components/Email";

function App() {
  return (
    <>
      <Header />
      <section className="max-w-6xl bg-primary mx-auto mt-20 rounded-[3rem] flex overflow-hidden">
          <div className="flex-1 p-10 space-y-10">
              <button
                type="button"
                className="py-2 px-4 text-md font-medium rounded-3xl bg-white flex gap-4 items-center "
              >
                <AiTwotoneFire />Recetas Calientes
              </button> 
              <h2 className="font-semibold text-5xl">Alitas de pollo <br></br> picantes</h2>
              <p className="text-black text-md leading-relaxed">"Crujientes, sabrosas y perfectamente condimentadas: <br></br> Disfrute de la receta definitiva de deliciosas alitas de pollo <br></br> que le dejarán con ganas de más"</p>
            <div className="flex flex-row justify-center gap-10 font-bold ">
              <button type="button" className="bg-bgColor rounded-xl flex items-center gap-4 px-4 py-1"><AiFillClockCircle /> 30 minutos</button>
              <button type="button" className="bg-bgColor rounded-xl flex items-center gap-4 px-4 py-1"><AiOutlineFork /> Pollo</button>
            </div>
            <div className="justify-center flex">
              <button type="button" className="flex items-center gap-3 bg-black text-white px-10 py-4 rounded-xl">Ver recetas <AiFillPlayCircle /> </button>
            </div>
          </div>
        <div className="flex-1">
          <img src="https://foodiex-yz.netlify.app/img/img-banner-hero.webp" alt="imagen de alitas de pollo" className="w-full h-full scale-y-110 object-cover rounded-lg" />
          </div>
      </section>
      <Categories />
      <Recipes />
      <Chef />
      <Posts />
      <Email />
      <Footer />
    </>

  )
}

export default App

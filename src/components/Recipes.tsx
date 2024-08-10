import { AiFillClockCircle } from "react-icons/ai";
import { FaUtensils } from 'react-icons/fa';


import recipes from '../data/recipes.json';

export default function Recipes() {


    return (
        <section className="max-w-6xl mx-auto mt-20">
            <div className="text-center">
                <h2 className="font-bold text-4xl">Recetas sencillas y sabrosas</h2>.
                <p>Delicias culinarias sencillas para mejorar tu cocina diaria. Descubra comidas rápidas y deliciosas <br></br> que impresionarán a sus invitados y harán de cada comida una ocasión especial.    </p>
            </div>
            <div className="grid grid-cols-3 mt-20 justify-around gap-10 ">
                {recipes.map(recipe => (
                    <div className="flex border bg-primary/15 flex-col rounded-3xl h-auto" key={recipe.id}>
                        <div className="relative rounded-lg overflow-hidden">
                            <img 
                                className='h-52  transform w-full px-1 pt-1 rounded-3xl hover:scale-110 object-cover transcition-all ease-in duration-300'
                                src={recipe.image} 
                                alt={`Imagen de la receta ${recipe.image}`} 
                            />


                        </div>
                        <div className="flex-1 p-4">
                            <p className='font-bold text-xl'>{recipe.nombre}</p>
                            <div className="flex items-center justify-start mt-4">
                                <p className='pr-4 rounded-xl flex items-center gap-2'><AiFillClockCircle />{recipe.duracion_preparacion}</p>
                                <p className='pr-4 rounded-xl flex items-center gap-2 '><FaUtensils />{recipe.categorias}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </section>
    )
}

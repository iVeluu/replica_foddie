
import categories from '../data/categories.json'

export default function Categories() {

    return (
        <section className="max-w-6xl mx-auto mt-10 space-y-20">

            <h2 className="font-bold text-4xl mb-10">Categorías</h2>
            <div className='flex mt-10 gap-8 items-center   '>
                {categories.map(category => (
                    <div 
                        key={category.id}
                        className='bg-gray-200 gap-10 flex-1 relative p-5 flex items-center justify-end flex-col pb-12 h-44 rounded-3xl shadow mt-10'
                    >
                        <img 
                            src={category.imagen} 
                            alt={`Imagen de la categoria ${category.nombre}`}
                            className='w-full h-36 absolute -top-14 transition-all duration-300 ease-in hover:-top-20'
                        />
                        <p className='text-center font-bold'>{category.nombre}</p>
                    </div>
                ))}
            </div>


        </section>
    )
}

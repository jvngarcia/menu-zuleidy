import Image from "next/image";
import { useState } from "react";


export default function Home() {


  const [ ingredients, setIngredients ] = useState()
  const [ preparation, setPreparation ] = useState()
  const [ image, setImage ] = useState('/platillo-principal.png')

  return (
    <main className="overflow-x-hidden">

      <section>
        <div className="w-full min-h-[450px]">

        </div>

      </section>


      <section className="my-12 pt-12 container mx-auto relative">
        <Image src="/small-tomato-2.png" width={120} height={120} alt="small tomato" className="absolute md:top-10 md:left-6 top-[-20px] left-[-20px] blur-sm rotate-[-45deg] -z-10" />
        <Image src="/small-tomato.png" width={120} height={120} alt="small tomato" className="absolute top-16 md:right-14 right-[-50px] rotate-[20deg] blur-sm -z-10 md:visible invisible" />
        <Image src="/small-tomato.png" width={80} height={80} alt="small tomato" className="absolute top-28 right-52 rotate-[20deg] blur-sm -z-10 md:visible invisible" />
        <Image src="/small-tomato.png" width={150} height={150} alt="small tomato" className="absolute top-40 md:right-24 right-[-100px] rotate-[20deg] drop-shadow -z-10" />
        <Image src="/hinojo.png" width={150} height={150} alt="hinojo" className="absolute top-96 left-[-120px] rotate-[50deg] drop-shadow -z-10" />
        <Image src="/hinojo.png" width={150} height={150} alt="hinojo" className="absolute bottom-0 md:right-[-120px] right-[-60px] rotate-[-50deg] drop-shadow -z-10" />
        <h1 className="uppercase text-4xl font-semibold text-center">Tentación del mar con texturas de la tierra</h1>
        <h6 className="uppercase text-lg tracking-[.25em] mt-4 text-center">By Zuleidy Castillo</h6>
        <div className="flex justify-center text-center">
          <p className="mt-4 md:w-1/2 md:px-0 px-6">
            ¡Bienvenidos!, En este sitio, encontrarás paso a paso la elaboración de un delicioso platillo que seguramente conquistará tu paladar. 
            Desde la selección de los ingredientes hasta la presentación final, ¡Disfrutalo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 mt-12">
          <div className="flex justify-center items-center md:px-0 px-6">
            <div>
              <h2 className="uppercase text-4xl font-semibold text-center">Preparacion</h2>
              <div className="flex justify-center w-full">
                <Image src="/main-separator.png" width={200} height={20} alt="separator" className="-mt-6 -mb-6" />
              </div>
              <p>
                Los botones con número en la receta indican los ingredientes y la forma de preparación de cada elemento del platillo. Cada número corresponde a una acción específica 
                que se debe realizar en el orden indicado para obtener el resultado final deseado. Siguiendo los circulos numerados, podrás cocinar el plato 
                de manera organizada y sin olvidar ningún paso importante.
              </p>

              <div className="grid grid-cols-5 mt-8">
                <div className="flex items-center justify-center">
                  <button className="bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center opacity-50 hover:opacity-100 transition-all">1</button>
                </div>

                <div className="flex items-center justify-center">
                  <button className="bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center opacity-50 hover:opacity-100 transition-all">2</button>
                </div>

                <div className="flex items-center justify-center">
                  <button className="bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center opacity-50 hover:opacity-100 transition-all">3</button>
                </div>

                <div className="flex items-center justify-center">
                  <button className="bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center opacity-50 hover:opacity-100 transition-all">4</button>
                </div>

                <div className="flex items-center justify-center">
                  <button className="bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center opacity-50 hover:opacity-100 transition-all">5</button>
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <Image src="/almeja.png" width={100} height={100} alt="small tomato" className="absolute md:top-36 md:right-28 top-[50px] right-[20px] rotate-[20deg] drop-shadow -z-10 blur-sm" />
            <Image src="/almeja.png" width={200} height={200} alt="small tomato" className="absolute md:top-28 md:left-16 top-[30px] left-0 md:rotate-[-40deg] rotate-[-20deg] drop-shadow -z-10 blur-[1px]" />
            <div className="relative">
              <Image src={ image } width={600} height={600} alt="Platillo por zuleidy castillo" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

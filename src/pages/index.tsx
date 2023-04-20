import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Home() {

  const router = useRouter()

  const [ingredients, setIngredients] = useState(<></>)
  const [preparation, setPreparation] = useState(<>
    <p>
      Los botones con número en la receta indican los ingredientes y la forma de preparación de cada elemento del platillo. Cada número corresponde a una acción específica
      que se debe realizar en el orden indicado para obtener el resultado final deseado. Siguiendo los circulos numerados, podrás cocinar el plato
      de manera organizada y sin olvidar ningún paso importante.
    </p>
  </>)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('/platillo-principal.png')
  const [ active, setActive ] = useState(0)


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
            <div id="paso-a-paso">
              <h2 className="uppercase text-4xl font-semibold text-center">Preparacion</h2>
              <div className="flex justify-center w-full">
                <Image src="/main-separator.png" width={200} height={20} alt="separator" className="-mt-6 -mb-6" />
              </div>
              {
                title && <>
                  <h3 className="text-2xl font-semibold text-center mb-6">{title}</h3>
                </>
              }
              {
                ingredients && ingredients
              }
              {
                preparation && preparation
              }

              <div className="grid grid-cols-5 mt-8">
                <div className="flex items-center justify-center">
                  <a href="#paso-a-paso" onClick={() => {
                    setTitle('Canelones de tinta de calamares')
                    setIngredients(<>
                      <h4 className="text-xl font-semibold mb-2">Ingredientes</h4>
                      <ul className="list-disc list-inside mb-6">
                        <li>100 gr de harina 00</li>
                        <li>1 huevo entero</li>
                        <li>4 gr de tinta de calamar</li>
                      </ul>
                    </>)

                    setPreparation(<>
                      <h4 className="text-xl font-semibold">Preparación</h4>
                      <p className="pt-3">
                        En un tazón grande, se tamiza la harina y forma un hueco en el centro. En otro tazón pequeño, bate el
                        huevo con un tenedor y agrega la tinta de calamar y la pizca de sal y se mezcla bien.
                        Vierte la mezcla de huevo en el centro del hueco de la harina.
                      </p>
                      <p className="pt-3">
                        Con un tenedor mezcla el huevo con la harina hasta que se forme una masa pegajosa.
                      </p>
                      <p className="pt-3">
                        Con las manos, se amasa la preparacion anterior hasta que esté suave y uniforme. Deja reposar
                        durante 30 minutos cubierto con un paño de cocina.
                      </p>
                      <p className="pt-3">
                        Después de 30 minutos, se estira la masa con un rodillo o una máquina de pasta hasta que tenga el
                        grosor deseado. Se corta la pasta en forma rectangular del tamaño deseado y hervir en agua con sal
                        durante 6 minutos. Reposar hasta necesitar.
                      </p>
                    </>)

              
                    setActive(1)
                  }}
                    className={ `bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center ${ active == 1 ? 'opacity-100' : 'opacity-50' } hover:opacity-100 transition-all` }>1</a>
                </div>

                <div className="flex items-center justify-center">
                  <a href="#paso-a-paso" onClick={() => {
                    setTitle('Caldo clarificado con limon')
                    setIngredients(<>
                      <h4 className="text-xl font-semibold mb-2">Ingredientes</h4>
                      <ul className="list-disc list-inside mb-6">
                        <li>1 litro de Caldo de vegetales</li>
                        <li>100 gr Cebolla</li>
                        <li>1 Pimienton</li>
                        <li>100 gr de Tomates cherrys</li>
                        <li>1 Limon</li>
                        <li>1 taza de vino blanco</li>
                        <li>5 ramas dePerejil</li>
                      </ul>
                    </>)

                    setPreparation(<>
                      <h4 className="text-xl font-semibold">Preparación</h4>
                      <p className="pt-3">
                        Partiendo del caldo de vegetales procedemos a hacer un caldo corto de vegetales. Agregamos la
                        cebolla, pimenton y tomates cherrys en una olla con el vino y esperamos a que este se evapore.
                      </p>
                      <p className="pt-3">
                        A fuego bajo agregamos a los vegetales el caldo de verduras y dejamos durante 1 hora
                        aproximadamente con el perejil.
                      </p>
                      <p className="pt-3">
                        Se cuela y posteriormente se procede a clarificar con una clara de huevo y un mirepoix de apio,
                        zanahoria y ajoporro.
                      </p>
                      <p className="pt-3">
                        Para clarificar se agrega el mirepoix con la clara al caldo preparado y se deja a fuego bajo durante 30
                        minutos. Luego se cuela en una manta cielo.
                      </p>
                    </>)

                    setActive(2)

              
                  }}
                    className={ `bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center ${ active == 2 ? 'opacity-100' : 'opacity-50' } hover:opacity-100 transition-all` }>2</a>
                </div>

                <div className="flex items-center justify-center">
                  <a href="#paso-a-paso" onClick={() => {
                    setTitle('Mousseline de merluza')
                    setIngredients(<>
                      <h4 className="text-xl font-semibold mb-2">Ingredientes</h4>
                      <ul className="list-disc list-inside mb-6">
                        <li>200 gramos de merluza fresca sin piel ni espinas</li>
                        <li>200 ml de nata para cocinar</li>
                        <li>1 claras de huevo</li>
                        <li>Sal y pimienta al gusto</li>
                        <li>1 cucharada de aceite de oliva</li>
                        <li>Ramas de Hinojo</li>
                        <li>Cebolla morada</li>
                      </ul>
                    </>)

                    setPreparation(<>
                      <h4 className="text-xl font-semibold">Preparación</h4>
                      <p className="pt-3">
                        Corta la merluza en trozos pequeños y ponlos en un procesador de alimentos. Tritura hasta obtener
                        un puré suave.
                      </p>
                      <p className="pt-3">
                        Hacer un salteado de la cebolla con un poco de aceite de oliva.
                      </p>
                      <p className="pt-3">
                        Agrega la nata para cocinar, las claras de huevo, la sal, la cebolla salteada y la pimienta al gusto.
                      </p>
                      <p className="pt-3">
                        Mezcla todo hasta que quede bien combinado y muy importante hacer todo el proceso de mezcla en
                        un baño maria frio.
                      </p>
                    </>)

                    setActive(3)

              
                  }}
                    className={ `bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center ${ active == 3 ? 'opacity-100' : 'opacity-50' } hover:opacity-100 transition-all` }>3</a>
                </div>

                <div className="flex items-center justify-center">
                  <a href="#paso-a-paso" onClick={() => {
                    setTitle('Arena comestible')
                    setIngredients(<>
                      <h4 className="text-xl font-semibold mb-2">Ingredientes</h4>
                      <ul className="list-disc list-inside mb-6">
                        <li>Aceitunas verdes</li>
                      </ul>
                    </>)

                    setPreparation(<>
                      <h4 className="text-xl font-semibold">Preparación</h4>
                      <p className="pt-3">
                        Disecar las aceitunas durante dos minutos en el microondas. Dejar reposar durante 10 minutos y
                        luego moler para convertirla en un polvo fino.
                      </p>

                    </>)

                    setActive(4)
              
                  }}
                    className={ `bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center ${ active == 4 ? 'opacity-100' : 'opacity-50' } hover:opacity-100 transition-all` }>4</a>
                </div>

                <div className="flex items-center justify-center">
                  <a href="#paso-a-paso" onClick={() => {
                    setTitle('Pimientos confitado con hinojo')
                    setIngredients(<>
                      <h4 className="text-xl font-semibold mb-2">Ingredientes</h4>
                      <ul className="list-disc list-inside mb-6">
                        <li>4 pimientos rojos grandes, cortados en tiras</li>
                        <li>2 ramas de hinojo fresco, finamente picadas</li>
                        <li>1 taza de aceite de oliva virgen extra</li>
                        <li>3 dientes de ajo, finamente picados</li>
                        <li>Sal y pimienta al gusto</li>
                      </ul>
                    </>)

                    setPreparation(<>
                      <h4 className="text-xl font-semibold">Preparación</h4>
                      <p className="pt-3">
                        Precalentar el horno a 150°C.
                      </p>
                      <p className="pt-3">
                        En una sartén grande, caliente el aceite de oliva a fuego medio-alto. Agregar los pimientos y las ramas
                        de hinojo y saltear durante 5 minutos, revolviendo constantemente. Agregar el ajo picado y sazonar
                        con sal y pimienta al gusto. Revolver para combinar.
                      </p>
                      <p className="pt-3">
                        Transferir la mezcla de pimientos a una bandeja para hornear y coloca en el horno precalentado.
                      </p>
                      <p className="pt-3">
                        Hornear durante 1 hora y 30 minutos, revolviendo ocasionalmente, hasta que los pimientos estén
                        suaves y caramelizados. Una vez que los pimientos estén listos, retirar del horno, deja enfriar a
                        temperatura ambiente y cortar en círculos pequeños.
                      </p>
                    </>)

                    setActive(5)

              
                  }}
                    className={ `bg-slate-600 rounded-full h-8 w-8 text-white flex justify-center items-center ${ active == 5 ? 'opacity-100' : 'opacity-50' } hover:opacity-100 transition-all` }>5</a>
                </div>

              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <Image src="/almeja.png" width={100} height={100} alt="small tomato" className="absolute md:top-36 md:right-28 top-[50px] right-[20px] rotate-[20deg] drop-shadow -z-10 blur-sm" />
            <Image src="/almeja.png" width={200} height={200} alt="small tomato" className="absolute md:top-28 md:left-16 top-[30px] left-0 md:rotate-[-40deg] rotate-[-20deg] drop-shadow -z-10 blur-[1px]" />
            <div className="relative">
              <Image src={image} width={600} height={600} alt="Platillo por zuleidy castillo" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import React from 'react'
import { Slider } from '../Slider/Slider'
import { SliderBookData } from '../Slider/SliderBookData'

export const Author = () => {
    return (
        <section id="author-section">
            <div className='header-section'>
                <h2>Sobre la autora</h2>
            </div>
            <Slider sliders={SliderBookData} />

            <div className='auhtor-text-content text-content'>
            Detrás del pseudónimo de Laila Newtton se encuentra Sandra Bou. <br></br><br></br>
            Nacida el verano del 2003 en Valencia, empezó a escribir a los once años guiones para 
            hacer unas pequeñas series con sus amigas en YouTube, cosa que nunca llevaría a cabo, 
            pero gracias a esto descubriría su gran afán por la escritura. 
            <br></br><br></br>
            Aficionada a leer sentada en los pasillos de las librerías, a comer galletas de chocolate 
            a las tres de la mañana y a cuidar de sus perros, ha aprendido a escribir con el paso de los años, inventándose 
            un sinfín de historias.
            <br></br><br></br>
            Sufrió anorexia durante su juventud, pero logró refugiarse en la lectura, en la escritura
            y en el amor de su perrita Laila. A raíz de su pérdida decidió dedicarle su pseudónimo.
            </div>

        </section>
    )
}

import { Slider } from '../Slider/Slider';
import { SliderBookData } from "../Slider/SliderBookData";
import './css/book.css';

export const Book = () => {
    return(
        <section id="book-section" className='section'>
            <div className='header-section'>
                <h2>El club de los ojos claros</h2>
            </div>
            <div className='slider-container'>
                <Slider className="slider-content" sliders={ SliderBookData } />
            </div>
            <div className='book-text-content text-content'>
            Emma ya no siente, desde hace dos meses.
            <br></br><br></br>
            Ya no toca el violín, no encuentra inspiración ni emoción en ninguna parte.
            <br></br><br></br>
            Ya no es ella.
            <br></br> <br></br>
            Desde que murió su hermano, Emma no es la misma; sin embargo, 
            un curioso acontecimiento la hará despertar y darse cuenta de que, quizás, 
            la vida es mucho más compleja de lo que ella imaginaba, y que nada es como  
            parece ser, que la luna no es solo un astro que va más allá, y que solo el 
            hecho de amar a alguien con todas tus fuerzas puede arrasarlo todo y cambiar el 
            rumbo.
            </div>

        </section>
    )
}
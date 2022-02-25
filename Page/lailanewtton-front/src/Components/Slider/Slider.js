import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./css/slider.css";
export const Slider  = ({ sliders }) => {

    return (
            <Carousel className='carrousel-container' showStatus={false} showThumbs={false}>
                {sliders.map((slider, index) => {
                    return (
                        <div key={index}>
                            <img src={slider.image} alt="Imagen"/>
                        </div>
                    )
                })}
            </Carousel>
        );
};
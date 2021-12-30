import LailaNewton from "./img/LailaNewtton.png";
import quotes from "./img/quotes.svg";
import "./css/main.css";
import { ParticleBackground } from "../../Effects/ParticleBackground";

export const Main = () => {

    return (
        <main id="main-section">
           <ParticleBackground/>
            <div id="photo-section">
                <img id="laila-newtton" src={LailaNewton} alt="Laila Newtton"/>
            </div>
            <img src={quotes} alt="quotes" id="quotes"/>
            <div id="text-section">
                <blockquote>
                    <pre style={{display: "inline"}}>   Deserunt labore anim velit</pre> aliqua proident minim ipsum veniam enim.
                    Amet ea ut enim quis esse duis sit cupidatat voluptate ut aliquip esse officia sit. 
                    Nostrud commodo Lorem eiusmod in non in sit Lorem excepteur irure officia enim.
                </blockquote>
            </div>
        </main>
    )
}
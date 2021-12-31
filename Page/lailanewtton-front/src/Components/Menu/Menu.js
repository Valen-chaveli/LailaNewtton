import { motion } from "framer-motion";
import "./css/menu.css";


export const Menu = () => {

    return(
    
        <motion.div id="menu-container" 
        initial={ { height: "100vh", width:"10%" ,opacity: 0 } }
        transition={{  duration: 1, type: "spring"}}
        exit={{ x: "130%", width:"100%", borderRadius:"50%", opacity: 0,} }
        key={"frame"}
        animate={{ height: "100vh",  borderRadius:"0%",width:"100%" ,opacity: 0.8 }} 
        >
            {/* TODO: Animacion que cuando se despliege el menu aparezcan como paginas de un libro y muestro el 
            contenido del menu */}
        <ul id="menu-list-item-container">
            <li whileHover={{scale: 1.2}} >
                <a href="#book-section">El club de los ojos claros</a>
            </li>
            <li> 
                <a href="">Sobre la autora</a>
            </li>
            <li> 
                <a href="">Contacto</a>
            </li>
        </ul>
        </motion.div>
    )
}
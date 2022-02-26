import { useState } from "react";
import { motion } from "framer-motion";
import { errorModal, errorModalServiceUnavailable, successModal } from "./modal/ModalMessages";
import "./css/contact.css";
import BookFrontPage from "./img/El-club-de-los-ojos-claros-portada.png";

export const Contact = () => {

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
    });

    const [emailCorrect, setEmailCorrect] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser({
            ...user,
          [name] : value
        });

    }

    const handleEmailChange = (e) => {

        const { name, value } = e.target;

        setUser({
            ...user,
          [name] : value
        });

        if(!emailCorrect) {
            const emailValid = checkEmailIsValid(e.target.value);

            if(emailValid) {
                setEmailCorrect(true);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { value : email } = e.target.email;
        
        const emailCorrect = checkEmailIsValid(email);

        if(!emailCorrect) setEmailCorrect(false);
        else {
            setEmailCorrect(true);

            console.log(user);

            //TODO: Cambiar por la ip correspondiente
            fetch("http://localhost:4000/sendEmail", {
                method: "POST",
                body : JSON.stringify(user), 
                headers: { "Content-Type": "application/json" }
            }).then((res) => {
                if(res.ok) successModal();
                else errorModal();
                
            }).catch( err =>{
                console.log(err);
                errorModalServiceUnavailable();
            });
        }
    }

    const checkEmailIsValid = (email) => {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        
        if(!emailRegEx.test(email)) {
            return false;
        } 

        return true;
    }
    
    return (
        <section id="contact-section">
        <div className='header-section'>
            <h2>Contacto</h2>
        </div>
        <div className='contact-content'>
            <div className="contact-content-image">
                <img src={BookFrontPage} alt="image"/>
            </div>
        
            <div className="contact-content-form">
                <div>
                    <h2>Contacta con la autora</h2>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                 <div className="form">
                    <input value={user.name} onChange={(e) => handleChange(e)}  type="text" name="name" autocomplete="false" required />
                    <label for="name" className="label-name">
                        <span className="content-name">Nombre</span>
                    </label>
                 </div>
                 <div className="form">
                    <input type="text" value={user.surname} onChange={(e) => handleChange(e)} name="surname" autocomplete="false" required/>
                    <label for="surname" className="label-name">
                        <span className="content-name">Apellidos</span>
                    </label>
                 </div>
                    { !emailCorrect && 
                    <motion.div  initial={{ opacity: 4 }} 
                    transition={{  duration: 1, type: "spring"}}  className="email-format-invalid-error">
                        Introduce un email válido
                    </motion.div>
                    }
                 <div className="form">
                    <input type="text" value={user.email} onChange={(e) => handleEmailChange(e) } name="email" autocomplete="false" required/>
                    <label for="email" className="label-name">
                        <span className="content-name">Email</span>
                    </label>
                 </div>
              
                 <div className="form-container-message">
                    <textarea value={user.message} onChange={(e) => handleChange(e)} placeholder="Escribe tu mensaje..." className="content-message" name="message" required></textarea>
                 </div>

                <div className="submit-button-container">
                    <input className="submit-button" type="submit" value="Enviar" />
                </div>
                </form>
            </div>
        </div>
    </section>
    )
}

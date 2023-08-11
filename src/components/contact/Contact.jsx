import React, { useState } from "react";
import "./contact.css";
import ContactNav from "./ContactNav";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaFacebookMessenger, FaWhatsappSquare } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iset19m",
        "template_1gkvltm",
        form.current,
        "Dqouoy6YrJlnVn62_"
      )
      .then(() => {
        e.target.reset();
        setMessageSent(true);
        setError(false); // Limpiar el estado de error en caso de éxito
      })
      .catch(() => {
        setError(true); // Manejo de error en caso de fallo
      });
  };

  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-contact-option">
          <article className="contact-option">
              <FaFacebookMessenger className="contact-logo" />
              <h4>Messenger</h4>
              <a href="https://m.me/edwardramon.almedorico">Envoyer message</a>
            </article>
            <article className="contact-option">
              <FaWhatsappSquare className="contact-logo" />
              <h4>WhatsApp</h4>
              <a href="https://api.whatsapp.com/send?+phone33770043183">
                Envoyer message
              </a>
            </article>
            <article className="contact-option">
                 <IoLocationSharp className="contact-logo"/> 
                 <h4>Nantes-France</h4>
                 <a href="https://www.google.com/maps/place/Nantes/@47.2383477,-1.7251392,11z/data=!3m1!4b1!4m6!3m5!1s0x4805ee81f0a8aead:0x40d37521e0ded30!8m2!3d47.218371!4d-1.553621!16zL20vMGhxenI?entry=ttu">
                    Voir sur Google Maps
                 </a>
                </article>
       
        </div>
       

        {messageSent ? (
          <div className="message-sent">
            <p>Votre message a été envoyé. Merci de m'avoir contacte! 🙂</p>
          </div>
        ) : (
          <div className="contact-formulaire">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="texte"
                name="name"
                placeholder="Nom Complet"
                required
              />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Envoyer
              </button>
            </form>
            {error && (
              <div className="error-message">
                Une erreur s'est produite lors de l'envoi du message 😕.
                Veuillez réessayer.
              </div>

            )}
           
             <div className="contact-nav">
          <ContactNav />
        </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

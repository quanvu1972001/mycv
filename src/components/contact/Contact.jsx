import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsappSquare} from 'react-icons/fa'

import { useRef } from 'react';
import emailjs from 'emailjs-com';


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5nfs0y8', 'service_5nfs0y8', form.current, 'ujPgwmLYOl81j8GPT')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>quanvu1972001@gmail.com</h5>
            <a href="">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messager</h4>
            <h5>Hong Quan Vu</h5>
            <a href="">Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>0387307099</h5>
            <a href="">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
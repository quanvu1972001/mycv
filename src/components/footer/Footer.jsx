import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>QuanVu</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div  className='footer__socials'>
        <a href=""><BsFacebook/></a>
        <a href=""><AiFillInstagram/></a>
        <a href=""><AiFillTwitterCircle/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; QuanVu. All rights reservice</small>
      </div>
    </footer>
  )
}

export default Footer
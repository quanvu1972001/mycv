import React from 'react'
import {BsLinkedin,BsInstagram,BsTwitch} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/profile.php?id=100067418340876" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/quaan_bean/" target="_blank"><BsInstagram/></a>
        <a href="https://chat.zalo.me/" target="_blank"><BsTwitch/></a>
    </div>
  )
}

export default HeaderSocials
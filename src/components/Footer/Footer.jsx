import React from 'react';
import s from '../../styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg'


const Footer = () => {
  return (
    <section className={s.footer}>
        <div className={s.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="Stuff" />
            </Link>
        </div>

        <div className={s.rights}>
            Developed by   <></>
            <a href="https://t.me/pollymantano"
            target='_blank'
            rel='noreferrer'
            >Pavlo</a>
        </div>

        <div className={s.socials}>
            
            <a href="https://www.instagram.com/pashajef/"
            target='_blank'
            rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
            </a>
            
            <a href="https://facebook.com"
            target='_blank'
            rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
            </a>

            <a href="https://youtube.com"
            target='_blank'
            rel='noreferrer'>
                    <svg className='icon'>
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
            </a>

        </div>
    </section>
  )
}

export default Footer

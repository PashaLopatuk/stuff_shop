import React from 'react'
import s from '../../styles/Home.module.css'
import bannerImg from '../../images/banner.png'

const Banner = () => {
  return (
    <section className={s.banner}>
        <div className={s.left}>
            <p className={s.content}>NEW YEAR <span>SALE!</span></p>
            <button className={s.more}>See more</button>
        </div>
        <img className={s.right} src={bannerImg} alt='banner'/>
        <p className={s.discount}>
            save up to <span>50%</span> off
        </p>
    </section>
  )
}

export default Banner

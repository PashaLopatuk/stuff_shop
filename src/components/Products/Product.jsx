import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {ROUTES} from '../../utils/routes'
import s from '../../styles/Product.module.css'

const SIZES = [4, 4.5, 5];

const Product = ({ images, title, price, description}) => {

  const [ currentImage, setCurrentImage ] = useState();
  const [ currentSize, setCurrentSize ] = useState();

    useEffect( () => {
        if (!images.length) return;
        setCurrentImage(images[0])
    }, [images] )

  return (
    <section className={s.product}>
        <div className={s.images}>
            <div className={s.current}>
                <img src={currentImage} alt="" />
            </div>
            <div className={s['images-style']}>
            {images.map((image, id) => (
                <div className={s.image} key={id} onClick={() => setCurrentImage(image)}><img src={image} alt="" /></div>
            ))}
            </div>
        </div>
        <div className={s.info}>
            <h1 className={s.title}>{title}</h1>
            <div className={s.price}>{price}$</div>
            <div className={s.color}><span>Green</span></div>
            <div className={s.sizes}>
                <span>Sizes: </span>
                <div className={s.list}>
                {SIZES.map(size => (
                    <div className={`${s.size} ${currentSize === size ? s.active : ''}` } 
                    onClick={() => setCurrentSize(size)} key={size}>
                        {size}
                    </div>
                ))}
                </div>
            </div>

            <p className={s.description}>{description}</p>

            <div className={s.actions}>
                <button className={s.add} disabled={!currentSize}>Add to cart</button>
                <button className={s.favourite}>Add to favourites</button>
            </div>

            <div className={s.bottom}>
                <div className={s.purchase}>
                    <span>{price}</span> people purchased
                </div>

                <Link to={ROUTES.HOME}>Return to store</Link>
            </div>
        </div>
    </section>
  )
}

export default Product

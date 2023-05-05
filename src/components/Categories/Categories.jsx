import React from 'react'
import s from '../../styles/Categories.module.css'
import { Link } from 'react-router-dom';

const Categories = ({ title, categories=[], amount }) => {
  const list = categories.filter((_, i) => i < amount);

  return (
    <section className={s.section}>
        <h2>{ title }</h2>
        <div className={s.list}>
            {list.map(({ id, name, image }) => 
                <Link to={`/categories/${id}`} key={id} className={s.item}>
                    <img src={image} alt="" />
                    <h3 className={s.title}>{name}</h3>
                </Link>
            )}
        </div>
    </section>
  )
}

export default Categories

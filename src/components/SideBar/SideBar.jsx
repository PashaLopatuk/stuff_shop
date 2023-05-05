import React from 'react'
import s from '../../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const { list } = useSelector(({ categories }) => categories)

  // console.log('list: ', list)

  return (
    <section className={s.sidebar}>
      <div className={s.title}>
        Categories
      </div>
      <nav>
        <ul className={s.menu}>
          {list.map( ({id, name }) => (
            <li key={id}>
              <NavLink 
              className={({ isActive }) =>
              `${s.link} ${isActive ? s.active : ''}`
              }
              to={`/categories/${id}`}>
                {name}  
              </NavLink>
            </li>
          ))}
          
        </ul>
      </nav>

      <div className={s.footer}>
        <a href="/help" className={s.link}>
          Help
        </a>
        <a href="/terms" className={s.link}>
          Terms & Conditions
        </a>
        
      </div>
    </section>
  )
}

export default SideBar

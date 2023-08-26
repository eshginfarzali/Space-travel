import {type FC, } from 'react'
import {NavLink, Outlet,} from 'react-router-dom'
import styles from './layout.module.css'




export const LayoutDestination:FC =()=>{
    
  return (
    <section className={styles.main} id='destination'>
     
    <header>
        <ul>
            <li>

            </li>
            <li>
                <NavLink  to='./moon'  >
                    Moon
                </NavLink>
            </li>
            <li>
                <NavLink to='./mars'>
                    Mars
                </NavLink>
            </li>
            <li>
                <NavLink to='./europa'>
                    Europa
                </NavLink>
            </li>
            <li>
                <NavLink to='./titan'>
                    Titan
                </NavLink>
            </li>

        </ul>
    </header>
       <Outlet/>
        
        </section>
  )
}

export default LayoutDestination
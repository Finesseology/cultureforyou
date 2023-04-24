import React from 'react'
import styles from '../styles/components_Styles/nav-bar-styles.module.css'
import Link from 'next/link'


const NavBar = () =>
{
    return(
        <nav className={styles.Nav_Main}>
            <ul className={styles.Nav_ul}>
                <Link className={styles.Nav_li} href ='/'><li>Home</li></Link>
                <Link className={styles.Nav_li} href ='../shop-layout'><li>Shop</li></Link>
                <Link className={styles.Nav_li} href ='../app-booking'><li>Appointments</li></Link>
                <Link className={styles.Nav_li} href ='../contact-us'><li>Contact Us</li></Link>
            </ul>


        </nav>
    )
}

export default NavBar

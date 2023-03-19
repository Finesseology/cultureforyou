import React from 'react'
import styles from '../styles/NavBarStyles.module.css'
import Link from 'next/link'


const NavBar = () =>
{
    return(
        <nav className={styles.Nav_Main}>
            <ul className={styles.Nav_ul}>
                <Link className={styles.Nav_li} href ='/'><li>HOME</li></Link>
                <Link className={styles.Nav_li} href ='../shop-layout'><li>SHOP</li></Link>
                <Link className={styles.Nav_li} href ='/'><li>APPOINTMENTS</li></Link>
                <Link className={styles.Nav_li} href ='../contact-us'><li>CONTACT US</li></Link>
 
            </ul>


        </nav>
    )
}

export default NavBar
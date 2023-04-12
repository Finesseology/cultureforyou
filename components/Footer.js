import React from 'react'
import styles from '../styles/components_Styles/FooterStyles.module.css'
import Link from 'next/link'


const Footer = () =>
{
    return(
        <nav className={styles.Footer_Main}>
            <ul className={styles.Footer_ul}>
                <Link className={styles.Footer_li} href ='/'><li>Privacy Policy</li></Link>
                <Link className={styles.Footer_li} href ='/'><li>Term of Service</li></Link> 
            </ul>


        </nav>
    )
}

export default Footer
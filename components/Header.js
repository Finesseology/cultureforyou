import React from 'react'
import styles from '../styles/HeaderStyles.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Header = () =>
{
    return(
        <div className={styles.Header_Center}>
            <Image
                className={styles.Header_Logo}
                src={"/index/cultureforyoulogo.png"}
                alt="CultureForYou Logo"
                width={180}
                height={130}
                priority />
          
            </div>
    )
}

export default Header

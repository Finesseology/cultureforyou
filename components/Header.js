import React from 'react'
import styles from '../styles/components_Styles/HeaderStyles.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const Header = () =>
{
    return(
        
        <div className={styles.Header_Left}>
            <div className={styles.Header_line}></div>
            <div className={styles.Header_Text}>
            <b>Culture For You</b>
                
            </div>
                
            </div>
    )
}

export default Header

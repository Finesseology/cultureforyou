import React from 'react'
import styles from '../styles/components_Styles/navbar-header-styles.module.css'

import Link from 'next/link'
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function SignInSignOutBar() {
    const { status } = useSession({
      required: true,
      onUnauthenticated() {
        
      },
    })
  
    if (status === "loading") {
      return <nav>

      <div  className={styles.mainContainer}>
        
       
        <div className={styles.webTitle}><Link className={styles.webTitle_li} href ='/'>Culture For You</Link></div>

       
         <ul className={styles.SignInSignOut_ul}>
            
         <Link className={styles.SignInSignOut_li} href ='/'><li>Home</li></Link>
         <Link className={styles.SignInSignOut_li} href ='../shop-layout'><li>Shop</li></Link>
  
         <Link className={styles.SignInSignOut_li} href ='../app-booking'><li>Appointments</li></Link>
         <Link className={styles.SignInSignOut_li} href ='../contact-us'><li>Contact Us</li></Link>
         <div className={styles.SignInSignOut_li}>|</div>
         <Link className={styles.SignInSignOut_li} href ='../sign-in-page'><li>Sign In</li></Link>
        <Link className={styles.SignInSignOut_li} href ='../create-account-page'><li>Create Account</li></Link> 
            
            
            
            
            
            

        </ul>
       



      </div>

  </nav>
    }
  
    return <nav className={styles.mainContainer}>
    <ul className={styles.SignInSignOut_ul}>

        <button onClick={() => signOut()}>Sign out</button>
    </ul>
  
  
  </nav>
    
  }
  


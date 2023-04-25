import React from 'react'
import styles from '../styles/components_Styles/sign-in-sign-out-bar-styles.module.css'
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
      return <nav className={styles.Container_Main}>
      <ul className={styles.SignInSignOut_ul}>
          <Link className={styles.SignInSignOut_li} href ='../sign-in-page'><li>Sign In</li></Link>
          <Link className={styles.SignInSignOut_li} href ='../create-account-page'><li>Create Account</li></Link> 
      </ul>
  
  
  </nav>
    }
  
    return <nav className={styles.Container_Main}>
    <ul className={styles.SignInSignOut_ul}>

        <button onClick={() => signOut()}>Sign out</button>
    </ul>
  
  
  </nav>
    
  }
  


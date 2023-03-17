import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/ShopPageStyles.module.css'


import HennaPic from 'pages/images/hennaTest.png'
import Engraving from 'pages/images/engraving.png'
import WeddingSign from 'pages/images/weddingSign.png'
import Topper from 'pages/images/toppers.png'
import Makeup from 'pages/images/makeup.png'
import Logo from 'pages/images/cultureforyoulogo.png'

const inter = Inter({ subsets: ['latin'] })

export default function shopLayout() {
  return (
   
      <main className ={styles.main}>
        <div>This is shop page</div>
      </main>

  )
}

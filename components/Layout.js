/**the lay out of the page is set here.
 * Instead of putting Navbar and Header js in _app.js
 * It is better to put it in here where this js will create a layout of the page 
 * and will import into _app.js
 * <Header/> is the website header / title / title logo
 * <NavBar/> is the navigation bar for the website
 * {children} is the pages it is on
 */

import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
//import styles from '../styles/LayoutStyles.module.css'

const Layout =({children}) => {
    return (
    
        <div className="content">
            <Header/>
            <NavBar/>
            {children}
            <Footer/>
        </div>
   
    );
}

export default Layout;

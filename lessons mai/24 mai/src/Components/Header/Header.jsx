import React from 'react'
import { Link } from "react-router-dom"
import cls from './Header.module.css'
import SubHeader from './SubHeader/SubHeader';

const Header = () => {
   return (
     <>
       <header className={cls.header}>
         <nav>
           <ul className={cls.navbar}>
             <li>
               <Link to={"/"}>Home</Link>
             </li>
             <li>
               <Link to={"/about"}>About</Link>
             </li>
             <li>
               <Link to={"/comments"}>Comments</Link>
             </li>
           </ul>
         </nav>
       </header>
       <SubHeader />
     </>
   );
}

export default Header

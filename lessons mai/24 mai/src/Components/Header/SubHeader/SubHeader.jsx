import React from "react";
import { Link } from "react-router-dom";
import cls from './SubHeader.module.css'

const SubHeader = () => {
  return (
    <>
        <div className={cls.subheader}>
           <ul>
              <li>
                 <Link to={'/1'}>Tap 1</Link>
              </li>
               <li>
                 <Link to={'/2'}>Tap 2</Link>
              </li>
               <li>
                 <Link to={'/3'}>Tap 3</Link>
              </li>
           </ul>
      </div>
    </>
  );
};

export default SubHeader;

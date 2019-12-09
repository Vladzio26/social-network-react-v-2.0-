import React from "react";
import s from "./Footer.module.css";

import { SocialIcon } from 'react-social-icons';


const Footer = () =>{


 
    return(
     
        <footer className={s.footer} augmented-ui="r-clip-y bl-clip-y exe"> 
       


            <div className={s.socialNet}>
                <SocialIcon className={s.socialItem} style={{ height: 40, width: 40 }} url="https://www.facebook.com/profile.php?id=100010095769274" />
                <SocialIcon className={s.socialItem}  style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/vlad-kravchenko-3000ba126/" />
                <SocialIcon className={s.socialItem}  style={{ height: 40, width: 40 }} url="https://github.com/Vladzio26" />
                <SocialIcon className={s.socialItem}  style={{ height: 40, width: 40 }} url="https://www.youtube.com/" />
            </div>

            <div>
                <ul className={s.footerItems}>
                    <li><a href='https://www.youtube.com/'>Contact</a></li>
                    <li><a href='https://www.youtube.com/'>FAQs</a></li>
                    <li><a href='https://www.youtube.com/'>Privacy</a></li>
                    <li><a href='https://www.youtube.com/'>Terms</a></li>
                </ul>
            </div>
            <div className={s.copy}><p>© Всі права захищені </p></div>
        </footer>
    )
}
export default Footer
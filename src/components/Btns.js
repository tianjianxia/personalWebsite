import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope, faFileAlt } from '@fortawesome/fontawesome-free-solid'
import styles from './btns.module.scss';

function Btns() {
    return (
        <div className={ styles.btn }>
            <div><a href="https://github.com/tianjianxia"><FontAwesomeIcon icon={ faGithub }/> Github </a></div>
            <div><a href="https://www.linkedin.com/in/tianjianxia/"><FontAwesomeIcon icon={ faLinkedin }/> LinkedIn </a></div>
            <div><a href="https://drive.google.com/file/d/1JhwmyWuT6b59E2MdF2TMnze_TCKGh60P/view?usp=sharing"><FontAwesomeIcon icon={ faFileAlt }/> My Resume </a></div>
            <div><a href="mailto:xtjnj95@gmail.com"><FontAwesomeIcon icon={ faEnvelope }/> Email Me </a></div>
        </div>
    );
}

export default Btns;

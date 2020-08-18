import React from 'react';
import styles from './portrait.module.scss';
import image from '../assets/portrait.jpg'

function Portrait() {
  return (
    <div className={ styles.portrait }>
      <img alt="" src={ image }/>
    </div>
  );
}

export default Portrait;

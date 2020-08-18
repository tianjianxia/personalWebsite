import React from 'react';
import styles from './App.module.scss';
import Portrait from '../components/Portrait'
import Name from '../components/Name'
import Btns from '../components/Btns'
import Jumbotron from '../components/Jumbotron'

function App() {
  return (
    <div className={ styles.App }>
      <div className={ styles.stable }>
          <Portrait />
          <Name />
          <Btns />
      </div>  
      <div className={ styles.change }>
          <Jumbotron />
      </div>
    </div>
  );
}

export default App;

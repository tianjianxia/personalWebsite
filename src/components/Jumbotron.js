import React from 'react';
import styles from './jumbotron.module.scss';

function Jumbotron() {
    return (
        <div className={ styles.jumbotron }>
            <div className={ styles.up }>
                <p>My name is TJ(Tianjian) Xia.</p>
                <p>I am a graduate student enrolled in Computer Engineering major, Syracuse Univeristy.</p>
                <p>I am currently seeking 2021 summer full-time SDE position oppotunities.</p> 
                <p> Feel free to connect me!</p>
            </div>  
            <div className={ styles.down }>
                <div className={ styles.old }>   Skillful Programmer</div>
                <div className={ styles.new }>                                Team Worker</div>
                <div className={ styles.old }>   Fast Learner</div>
                <div className={ styles.new }>                                Lifetime Engineer</div>
            </div>

        </div>
    );
}

export default Jumbotron;
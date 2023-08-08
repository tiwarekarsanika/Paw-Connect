import React from 'react'
import styles from './Online.module.css'

const Online = (props) => {
    return (
        <li className={styles.online}>
            <div className={styles.isOnline}>
                <img src={props.photo} className={styles.photo} />
                <span className={styles.active}></span>
            </div>
            <div className={styles.name}>{props.name}</div>
        </li>
    )
}

export default Online

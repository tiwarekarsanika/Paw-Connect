import React from 'react'
import styles from './CloseFriends.module.css'

const CloseFriends = (props) => {
    return (
        <li className={styles.friend}>
            <img src={props.photo} className={styles.friendImg} />
            <span>{props.name}</span>
        </li>
    )
}

export default CloseFriends

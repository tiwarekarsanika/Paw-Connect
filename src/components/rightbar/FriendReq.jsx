import React from 'react'
import styles from './FriendReq.module.css'

const FriendReq = (props) => {
    return (
        <div className={styles.friendReq}>
            <img src={props.img} className={styles.profile} />
            <span className={styles.freqRight}>
                <div className={styles.freqTop}>
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.mutuals}>{props.mutuals} mutuals</span>
                </div>
                <div className={styles.butts}>
                    <button className={styles.accept}>Accept</button>
                    <button className={styles.decline}>Decline</button>
                </div>
            </span>
        </div>
    )
}

export default FriendReq

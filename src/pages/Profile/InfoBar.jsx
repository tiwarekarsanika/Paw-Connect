import React from 'react'
import styles from './InfoBar.module.css'
import { LocationOn, Cake, Face3 } from '@mui/icons-material'
import postData from '../../data/postData'

const InfoBar = () => {
    return (
        <div className={styles.infoBar}>
            <div className={styles.infoCard}>
                <h2 className={styles.heading}>User Information</h2>
                <div className={styles.user}>
                    <div className={styles.info}>
                        <LocationOn className={styles.infoIcon} />
                        <span>Hartford, Pennsylvania.</span>
                    </div>
                    <div className={styles.info}>
                        <Cake className={styles.infoIcon} />
                        <span>3 February, 2017</span>
                    </div>
                    <div className={styles.info}>
                        <Face3 className={styles.infoIcon} />
                        <span>Anna Wong</span>
                    </div>
                </div>
            </div>
            <div className={styles.friendCard}>
                <h2 className={styles.heading}>Friends</h2>
                <div className={styles.friends}>
                    {
                        postData.map((data) => {
                            return (
                                <div className={styles.friendInfo}>
                                    <img src={data.photo} className={styles.friendImg} />
                                    <div className={styles.friendName}>{data.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoBar

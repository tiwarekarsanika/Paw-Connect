import React from 'react'
import styles from './Share.module.css'
import profile from '../../assets/doggo.png'
import { PermMedia, LocalOffer, LocationOn, EmojiEmotions } from '@mui/icons-material'

const Share = () => {
    return (
        <div className={styles.shareBox}>
            <div className={styles.topShare}>
                <img src={profile} className={styles.profile} alt="Profile Photo" />
                <input className={styles.inp} placeholder="What's on your mind?" />
            </div>
            <hr />
            <div className={styles.bottomShare}>
                <div className={styles.shareTabs}>
                    <PermMedia htmlColor="Tomato" className={styles.shareIcon}/>
                    <span>Photo or Video</span>
                </div>
                <div className={styles.shareTabs}>
                    <LocalOffer htmlColor="DodgerBlue" className={styles.shareIcon}/>
                    <span>Tag</span>
                </div>
                <div className={styles.shareTabs}>
                    <LocationOn htmlColor="MediumSeaGreen" className={styles.shareIcon}/>
                    <span>Location</span>
                </div>
                <div className={styles.shareTabs}>
                    <EmojiEmotions htmlColor="GoldenRod" className={styles.shareIcon}/>
                    <span>Feelings</span>
                </div>
                <button className={styles.shareButt}>Share</button>
            </div>
        </div>
    )
}

export default Share

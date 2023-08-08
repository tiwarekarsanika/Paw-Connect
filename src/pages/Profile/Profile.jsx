import React from 'react'
import styles from './Profile.module.css'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import InfoBar from './InfoBar'
import coverimg from '../../assets/coverimg.png'
import profile from '../../assets/doggo.png'

const Profile = () => {
    return (
        <div className={styles.profilePage}>
            <TopBar />
            <div className={styles.container}>
                <SideBar />
                <div className={styles.profileRight}>
                    <div className={styles.profileTop}>
                        <img className={styles.cover} src={coverimg} alt="Cover image not loaded."/>
                        <img className={styles.profile} src={profile} alt="Profile photo not loaded."/>
                        <div className={styles.profileInfo}>
                            <h4 className={styles.name}>Zion</h4>
                            <p className={styles.bio}>Hi, I am Zion! I am a Hybrid and I stay in Hartsford. I like back rubs and I love chicken nuggets.</p>
                        </div>
                    </div>
                    <div className={styles.profileBottom}>
                        <Feed />
                        <InfoBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

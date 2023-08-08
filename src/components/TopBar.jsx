import React from 'react'
import styles from './TopBar.module.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import profile from '../assets/doggo.png'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

const TopBar = () => {

    return (
        <div className={styles.topBar}>
            <div className={styles.leftTop}>
                <img src={logo} className={styles.image} />
            </div>
            <div className={styles.centerTop}>
                <Search className={styles.search} />
                <input placeholder='Search for your furry friends...' className={styles.searchBar} />
            </div>
            <div className={styles.rightTop}>
                <div>
                    <span className={styles.topLinks}>HomePage</span>
                    <span className={styles.topLinks}>Timeline</span>
                </div>
                <div className={styles.topIcons}>
                    <div className={styles.topIconItem}>
                        <Person className={styles.icon} />
                        <span className={styles.topIconBadge}>1</span>
                    </div>
                    <div className={styles.topIconItem}>
                        <Chat className={styles.icon} />
                        <span className={styles.topIconBadge}>2</span>
                    </div>
                    <div className={styles.topIconItem}>
                        <Notifications className={styles.icon} />
                        <span className={styles.topIconBadge}>3</span>
                    </div>
                </div>
                <Link to="/profile"><img src={profile} className={styles.image}/></Link>
            </div>
        </div>
    )
}

export default TopBar

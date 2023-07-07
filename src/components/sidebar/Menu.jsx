import React from 'react'
import styles from './Menu.module.css'
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, Work, Event, School } from '@mui/icons-material'

const Menu = () => {
    return (
        <ul className={styles.sbIcon}>
            <li className={styles.listItem}>
                <RssFeed />
                <span>Feed</span>
            </li>
            <li className={styles.listItem}>
                <Chat />
                <span>Chats</span>
            </li>
            <li className={styles.listItem}>
                <PlayCircle />
                <span>Videos</span>
            </li>
            <li className={styles.listItem}>
                <Group />
                <span>Groups</span>
            </li>
            <li className={styles.listItem}>
                <Bookmark />
                <span>Bookmarks</span>
            </li>
            <li className={styles.listItem}>
                <HelpOutline />
                <span>Questions</span>
            </li>
            <li className={styles.listItem}>
                <Work />
                <span>Jobs</span>
            </li>
            <li className={styles.listItem}>
                <Event />
                <span>Events</span>
            </li>
            <li className={styles.listItem}>
                <School />
                <span>Courses</span>
            </li>
        </ul>
    )
}

export default Menu

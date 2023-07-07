import React from 'react'
import styles from './SideBar.module.css'
import Menu from './Menu.jsx'
import CloseFriends from './CloseFriends.jsx'
import postData from '../../data/postData'

const SideBar = () => {
  console.log(postData)
  return (
    <div className={styles.sidebar}>
      <div className={styles.sbWrapper}>
        <Menu />
        <button className={styles.showButt}>SHOW MORE</button>
        <hr className={styles.divider} />
        <ul className={styles.friendList}>
          {
            postData.map((data) => {
             return <CloseFriends {...data} key={data.id} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar

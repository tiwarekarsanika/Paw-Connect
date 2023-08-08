import React from 'react'
import styles from './Home.module.css'
import TopBar from '../../components/TopBar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'

const Home = () => {
  return (
    <div className={styles.home}>
      <TopBar />
      <div className={styles.container}>
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  )
}

export default Home

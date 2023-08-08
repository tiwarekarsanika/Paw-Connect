import React from 'react'
import styles from './RightBar.module.css'
import gift from '../../assets/hbdgift.png'
import postData from '../../data/postData'
import friendReqs from '../../data/friendReqs'
import FriendReq from './FriendReq.jsx'
import Online from './Online.jsx'

const RightBar = () => {
  return (
    <div className={styles.rightbar}>
      <div className={styles.birthday}>
        <img src={gift} className={styles.gift} alt="Birthday present" />
        <span><b>Torro</b> and <b>2 others</b> have their birthdays today!</span>
      </div>
      <div className={styles.friendReqCard}>
        <h2 className={styles.heading}>Friend Requests</h2>
        {
          friendReqs.map((data) => {
            return (
              <FriendReq {...data} key={data.id}/>
            )
          })
        }
      </div>
      <div className={styles.activity}>
        <h2 className={styles.heading}>Online Friends</h2>
        <ul className={styles.onlineList}>
          {
            postData.map((info) => {
              return <Online {...info} key={info.id} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default RightBar

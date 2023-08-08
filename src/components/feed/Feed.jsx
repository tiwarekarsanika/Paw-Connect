import React from 'react'
import styles from './Feed.module.css'
import ShareContent from './Share.jsx'
import Post from './Post.jsx'
import postData from '../../data/postData'

const Feed = () => {
  return (
    <div className={styles.feed}>
      <div className={styles.feedWrapper}>
        <ShareContent />
        {
          postData.map((data) => {
            return <Post {...data} key={data.id} />;
          })
        }
      </div>
    </div>
  )
}

export default Feed

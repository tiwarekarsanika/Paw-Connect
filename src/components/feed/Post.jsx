import React, {useState } from 'react'
import styles from './Post.module.css'
import { MoreVert, FavoriteBorder, Send, Favorite} from '@mui/icons-material'

const Post = (props) => {
    const [likesnum, setLikes] = useState(props.likes);
    const[heart, isLiked] = useState(false);

    const likeHandler = () => {
        isLiked(!heart)
        setLikes(heart ? likesnum - 1 : likesnum + 1)
    }

    return (
        <div className={styles.post}>
            <div className={styles.postTop}>
                <div className={styles.topLeft}>
                    <img className={styles.profile} src={props.photo} alt="Profile Picture" />
                    <span className={styles.name}>{props.name}</span>
                    <span className={styles.postTime}>{props.posted} mins ago</span>
                </div>
                <div className={styles.topRight}>
                    <MoreVert />
                </div>
            </div>
            <div className={styles.postCenter}>
                <div className={styles.caption}>{props?.caption}</div>
                <img className={styles.postImg} src={props.photo} alt="Post unable to load" />
            </div>
            <div className={styles.postBottom}>
                <div className={styles.bottomLeft}>
                    {
                        heart ? <Favorite onClick={likeHandler} /> : <FavoriteBorder className={styles.postIcon} onClick={likeHandler} />
                    }
                    <Send className={styles.postIcon}/>
                    <span className={styles.likeCounter}>{likesnum} friends like it</span>
                </div>
                <div className={styles.bottomRight}>{props.comments} comments</div>
            </div>
        </div>
    )
}

export default Post

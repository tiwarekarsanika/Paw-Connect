import React from 'react'
import styles from './Login.module.css'
import Lottie from 'lottie-react'
import pupAnim from '../assets/pupAnimation.json'

const Login = () => {
    const [clicked, setClicked] = React.useState(false);
    const loginHandler = () => {
        const card = document.getElementById('card')
        card.style.animation = '5s ease normal'
        card.style.transition = 'translate 700ms'
        card.style.translate = '-18rem 0rem'
        console.log("clicked");
        setClicked(!clicked);
    };
    const signHandler = () => {
        const card = document.getElementById('card')
        card.style.animation = '5s ease normal'
        card.style.transition = 'translate 700ms'
        card.style.translate = '0rem 0rem'
        console.log("clicked");
        setClicked(!clicked);
    };

    return (
        <div className={styles.login}>
            <div className={styles.cards}>
                <div className={styles.backCard}>
                    <div className={styles.backContent}>
                        <div className={styles.backLeft}>
                            <h3 className={styles.question}>Have an account?</h3>
                            <button className={styles.butt} onClick={loginHandler}>Login</button>
                        </div>
                        <div className={styles.backRight}>
                            <h3 className={styles.question}>Don't have an account?</h3>
                            <button className={styles.butt} onClick={signHandler}>Sign Up</button>
                        </div>
                    </div>
                    <div id='card' className={styles.frontCard}>
                        {
                            clicked ?
                                <div className={styles.frontRight} tabindex="0">
                                    <div className={styles.cardContent}>
                                        <h1 className={styles.title}>Welcome to</h1>
                                        <h2 className={styles.subTitle}>Paw Connect.</h2>
                                        <div className={styles.mid}>
                                            <input className={styles.inp} placeholder="Username" />
                                            <input className={styles.inp} placeholder="Password" />
                                            <button className={styles.butt}>Login</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className={styles.frontLeft} tabindex="0">
                                    <div className={styles.cardContent}>
                                        <h1 className={styles.title}>Welcome to</h1>
                                        <h2 className={styles.subTitle}>Paw Connect.</h2>
                                        <div className={styles.mid}>
                                            <input className={styles.inp} placeholder="Full Name" />
                                            <input className={styles.inp} placeholder="Email" />
                                            <input className={styles.inp} placeholder="Username" />
                                            <input className={styles.inp} placeholder="Password" />
                                            <button className={styles.butt}>Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <Lottie animationData={pupAnim} loop={true} className={styles.anim}/>
        </div>
    )
}

export default Login

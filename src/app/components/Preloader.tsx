import React from 'react'
import styles from '../page.module.css'

const Preloader = () => {
  return (
    <>
    <img className={styles.preloader} src="/images/preloaderGif.gif" alt="image" />
    </>
  )
}

export default Preloader
import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
        <h2 className={styles.title}>Notes App</h2>
        <span className={styles.rights}><a href="https://www.linkedin.com/in/abdul-hannan-929a762b8/" className={styles.author} target='_blank'>Abdul Hannan</a> &copy; 2026. All rights reserved.</span>
    </div>
  )
}

export default header
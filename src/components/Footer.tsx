import React from 'react'
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p style={{ fontSize: 'x-large' }}>AI was used to create this website</p>
      <p>Copyright &copy; {year}</p>
    </footer>
  )
}

export default Footer

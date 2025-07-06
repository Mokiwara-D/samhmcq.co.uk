import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Created By: Sam McHugh</h2>
        </div>
        <div className={styles.content}>
            <p>Site Repo: <a href="https://github.com/Mokiwara-D/samhmcq.co.uk">github.com/Mokiwara-D/samhmcq.co.uk</a></p>
            <p>Initial Design: <a href="https://demo.holidaywebtech.co.uk/">demo.holidaywebtech.co.uk</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
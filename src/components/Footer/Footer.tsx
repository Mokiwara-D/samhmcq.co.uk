import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__header">
          <h2>Created By: Sam McHugh</h2>
        </div>
        <div className="footer__content">
            <p>Site Repo: <a href="https://github.com/Mokiwara-D/samhmcq.co.uk">github.com/Mokiwara-D/samhmcq.co.uk</a></p>
            <p>Initial Design: <a href="https://demo.holidaywebtech.co.uk/">demo.holidaywebtech.co.uk</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
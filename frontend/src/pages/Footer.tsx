
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../App.css'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {

  return (
    <>
      <footer>
        Created by <a href="https://www.linkedin.com/in/melany-strack/"><FontAwesomeIcon icon={faLinkedin}/>Melany Strack</a>
      </footer>
    </>
  )
}
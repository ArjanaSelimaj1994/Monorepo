import styles from './Footer.module.scss'
import {Container } from 'react-bootstrap'

const Footer = () => {
    return (
       <Container>
            <div className={styles.footer}>
                <p>Not sure about consulation type? Please, call 0203795963</p>
            </div> 
        </Container>
    )
}

export default Footer;
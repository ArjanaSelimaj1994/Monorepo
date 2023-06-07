import { Container } from "react-bootstrap"
import Footer from '../layouts/Footer/Footer'
import Header from '../layouts/Header/Header'

const withLayouts = (Component) => {
    return (props) => {
        return (
            <>
                <Header/>
                <Container>
                    <Component {...props} />
                </Container>
                <Footer/>
            </>
        )
    }
}

export default withLayouts
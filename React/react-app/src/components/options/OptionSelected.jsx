import { Container } from 'react-bootstrap'
 
const OptionSelected = (props) => {

    return (
        <Container>
            <h4>{props.option.name}</h4>
        </Container>
    )

}

export default OptionSelected
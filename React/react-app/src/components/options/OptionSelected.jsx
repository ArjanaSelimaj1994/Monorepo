import { Container } from 'react-bootstrap'
 
const OptionSelected = ({option}) => {

    return (
        <Container>
            <h4>{option.name}</h4>
        </Container>
    )

}

export default OptionSelected
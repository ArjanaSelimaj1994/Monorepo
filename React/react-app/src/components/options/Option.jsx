import { NavLink } from 'react-router-dom'
import  styles from './Option.module.scss'
import { useDispatch } from 'react-redux'
import { setStep } from '../../store/slices/stepSlice'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Option = ({option}) => {

    const dispatch = useDispatch();

    
    const handleOptionClick = () => {
        dispatch(setStep('2/2'))
    }
    return (
        <div className={styles.option}>
           <NavLink to={`selection/${option.id}`} onClick={handleOptionClick}>
                <img src={option.url}/>
                <p>{option.name}</p>
                <FontAwesomeIcon icon={faChevronRight}/>
            </NavLink>
        </div>
    )
}

export default Option
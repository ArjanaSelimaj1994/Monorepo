import { NavLink } from 'react-router-dom'
import  styles from './Option.module.scss'
import { useDispatch } from 'react-redux'
import { setStep } from '../../store/slices/stepSlice'


const Option = ({option}) => {

    const dispatch = useDispatch();

    
    const handleOptionClick = () => {
        dispatch(setStep('2/2'))
    }
    return (
        <div className={styles.option}>
           <NavLink to={`selection/${option.id}`} onClick={handleOptionClick}>
                {option.name}
            </NavLink>
        </div>
    )
}

export default Option
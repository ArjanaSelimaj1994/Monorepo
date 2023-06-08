import  styles  from './header.module.scss'
import  { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setStep } from '../../store/slices/stepSlice'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => { 
    const step = useSelector((state) => state.step.value)
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleBack = () => {
        dispatch(setStep('1/2'));
        navigate('/')
    }

    return (
        <div className={styles.header}>
           {step === '2/2' && 
                    <button className={styles.backButton} onClick={handleBack}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button> 
                }
            <h4> Choose Service </h4>
            <p>Step {step}</p>
        </div>
    )
}

export default Header;
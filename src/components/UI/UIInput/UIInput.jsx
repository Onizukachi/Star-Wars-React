import styles from './UIInput.module.css';
import cn from 'classnames'
import '../index.css'
import icon from './img/cancel.svg'

const UIInput = ({value, handleInputChange, placeHolder, classes}) => {
  
  return (
    <div className={cn(styles.wrapper__input, classes)}>
        <input className={cn(styles.input)}
            type="text"
            value={value} 
            onChange={(e)  => handleInputChange(e.target.value)}
            placeholder={placeHolder}
        />
        <img onClick={() => value && handleInputChange('')} src={icon} alt="Cancel" className={cn(styles.clear, !!!value && styles.clear__disable)}/>
    </div>
  )
}

export default UIInput;

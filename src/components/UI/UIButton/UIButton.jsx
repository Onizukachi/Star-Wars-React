import cn from 'classnames'
import styles from './UIButton.module.css'
import '../index.css'

const UIButton = ({theme='dark', text, disabled, onClick, classes}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={cn(styles.button, styles[theme], classes)}>{text}</button>
    )
}

export default UIButton;

import styles from './ChooseSide.module.css';
import cn from 'classnames'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'
import imgLightSide from './img/light-side.jpg'
import imgDarkSide from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'

const ChooseSideIcon = ({theme, text, img, classes }) => {
    const isTheme = useTheme();

    return (
        <div onClick={() => isTheme.change(theme)} className={cn(styles.item, classes)}>
            <div className={styles.item__header}>{text}</div>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )
}

const ChooseSide = () => {
    return (
        <div className={styles.container}>
            <ChooseSideIcon theme={THEME_LIGHT} img={imgLightSide}  text="Light Side" classes={styles.item__light} />
            <ChooseSideIcon theme={THEME_DARK} img={imgDarkSide} text="Dark Side" classes={styles.item__dark} />
            <ChooseSideIcon theme={THEME_NEITRAL} img={imgFalcon} text="I'am Han Solo" classes={styles.item__neitral} />
        </div>
    )
}

export default ChooseSide;

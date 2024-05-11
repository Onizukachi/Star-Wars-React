export const changeCssVariables = (theme) => {
    const root = document.documentElement;
    
    const cssVariables = ['header', 'bgimage']

    cssVariables.forEach((el) => {
        root.style.setProperty(`--theme-default-${el}`, `var(--theme-${theme}-${el})`)
    })
}
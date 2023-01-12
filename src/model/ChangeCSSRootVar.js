export default function changeCSSRootVar(theme){

  
    const root = document.querySelector(':root');

    const components = [
        'bg-default', 
        'component-bg', 
        'card-bg', 
        'color'
    ];

    root.style.setProperty('--bg-default', `var(--bg-${theme})`);

    components.forEach((component) => {
        root.style.setProperty(
            `--${component}-default`, 
            `var(--${component}-${theme})`
        );
    })
};
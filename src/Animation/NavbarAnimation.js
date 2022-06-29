export const NavbarAnimation = {
    hidden : {
        y : '-100vw'
    },
    visible : {
        y : 0,
        transition : {
            type : 'spring', 
            duration : 1,
        }
    },
    hover : {
        scale : 1.1,
        transition : {
            yoyo : 'Infinity',
            duration : 0.5
        }
    }
}

export const LogoAnimation = {
    hover : {
        scale : 1.1,
        transition : {
            yoyo : 'Infinity',
            duration : 0.3
        }
    }
}

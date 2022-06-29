export const HomeAnimation = {
    hidden : {
        x : '100vw'
    },
    visible : {
        x : '0',
        transition : {
            duration : 1,
            type : 'spring',
        }
    },
}

export const buttonAnimation = {
    hover : {
        scale : 1.1,
        transition : {
            yoyo : 'Infinity',
            duration : 0.5
        }
    },
    hidden : {
        opacity : 0,
    },
    visible : {
        opacity : 1,
        transition : {
            duration : 0.5,
            delay : 1.5
        }
    }
}
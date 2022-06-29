export const AboutUsAnimation = {
    hidden : {
        opacity : 0,
        scale : 0
    },
    visible : {
        opacity : 1,
        scale : 1,
        rotateZ : 180,
        transition : {
            duration : 1,
            ease : 'easeOut',
        }
    }
}

export const TextAnimation = {
    hidden : {
        opacity : 0
    },
    visible : {
        opacity : 1,
        transition : {
            duration : 1,
            delay : 1,
            ease : 'easeInOut'
        }
    }
}
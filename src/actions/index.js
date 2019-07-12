export const getSingleScore = (payload) => {
    return {
        type: 'GET_SINGLE_SCORE',
        'payload': {
            ...payload
        }

    }
}
export const getBatchScores = (payload) => {
    return {
        type: 'GET_BATCH_SCORES',
        'payload': {
            ...payload
        }

    }
}
export const updatePlaceHolder = (payload) => {
    return {
        type: 'UPDATE_PLACEHOLDER',
        'payload': {
            ...payload
        }

    }
}


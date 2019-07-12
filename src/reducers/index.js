export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_SINGLE_SCORE': {
            return { ...state, singleSrcStore: { ...action.payload } }
        }
        case 'GET_BATCH_SCORES': {
            return { ...state, batchReqStore: { ...action.payload } }
        }
        case 'UPDATE_PLACEHOLDER': {
            return { ...state, batchReqStore: { ...action.payload } }
        }
        default: {
            return state
        }
    }
}
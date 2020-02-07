import { DECKINC } from '../action/actionTypes'
let initialState = {
    user: 0
}
const GROReducer = (state = initialState, action) => {
    switch (action.type) {
        case DECKINC:
            return {
                ...state,
                user: action.payload
            }

        // case 'DECK_ASYNC':
        //     return {
        //         ...state,
        //         user: action.payload
        //     }
        default:
            return state
    }
}

export default GROReducer
import {DECKINC} from './actionTypes'


export const increaseDeck =(step)=>{
    return {
        type: DECKINC,
        payload: step
    }
}
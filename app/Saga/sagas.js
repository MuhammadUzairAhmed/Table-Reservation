import { delay } from 'redux-saga'
import { takeEvery, put } from 'redux-saga/effects';

function* asyncDeck() {
    // yield delay(4000);
    yield put({ type: 'DECK_ASYNC', value: 1 });
}

export function* watchDeckInc() {
    yield takeEvery('DECK', asyncDeck)
}
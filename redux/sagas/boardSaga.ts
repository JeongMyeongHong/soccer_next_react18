import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { boardActions } from '../reducers/boardReducer.ts'
import { postBoard } from '../api/boardApi.ts'

interface BoardType{    
    type: string;
    payload: {
        title: string;
        name: string;  
        subject: string;
        contents: string;  
    }
}

interface BoardAddSuccessType{
    type: string;
    payload: {
        title: string
    }
}

function* add(board: BoardType){
    try{
        alert(' 진행 3: saga내부 add 성공' + JSON.stringify(board))
        const response: BoardAddSuccessType = yield postBoard(board.payload)
        yield put(boardActions.addSuccess(response))
    }catch(error){
        alert(' 진행 3: saga내부 add 실패 : ' + error)
        yield put(boardActions.addFailure(error))
    }
}


export function* watchAddboard(){
    yield takeLatest(boardActions.addBoard, add)
}
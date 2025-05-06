import api from 'utils/api';
import {URL_API} from '../common';
import {put, takeLatest} from 'redux-saga/effects';
import actions, {_onFail, _onSuccess} from '@actions';
function* historyChat(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.chat.history, params);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* room(action) {
  const {room_key} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.chat.room}/${room_key}`);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
function* sendMessage(action) {
  const body = yield action.body;
  try {
    const res = yield api.post(URL_API.chat.send, body);
    yield put({
      type: _onSuccess(action.type),
      data: res.data.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error);
  }
}
export default function* watchChatSagas() {
  yield takeLatest(actions.HISTORY_CHAT, historyChat);
  yield takeLatest(actions.ROOM, room);
  yield takeLatest(actions.SEND_MESSAGE, sendMessage);
}

import api from 'utils/api';
import {URL_API} from '../common';
import {takeLatest, put} from 'redux-saga/effects';
import actions, {_onSuccess, _onFail} from '@actions';
function* getHelp(action) {
  const {number} = yield action.params;
  try {
    const res = yield api.get(`${URL_API.page.help}/${number}`);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error.data);
  }
}
function* getFAQ(action) {
  const params = yield action.params;
  try {
    const res = yield api.get(URL_API.faq.list, params);
    yield put({
      type: _onSuccess(action.type),
      data: res.data,
    });
    action.onSuccess?.(res);
  } catch (error) {
    yield put({type: _onFail(action.type)});
    action.onFail?.(error.data);
  }
}
export default function* watchHelpSagas() {
  yield takeLatest(actions.GET_HELP, getHelp);
  yield takeLatest(actions.GET_FAQ, getFAQ);
}

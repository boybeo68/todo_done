import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducer/reducer';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas/rootSaga';
// export const sagamiddleWare = createSagaMiddleware();
const store = createStore(reducers);
// sagamiddleWare.run(rootSaga);
export default store;

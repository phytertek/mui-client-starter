import { combineReducers, createStore, applyMiddleware } from 'redux';

const store = combineReducers({
  app: (state = {}) => state
});

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default (process.env.NODE_ENV === 'development'
  ? createStoreWithMiddleware(
      store,
      window.__REDUCT_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : createStoreWithMiddleware(store));

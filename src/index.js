import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import projectReducer from './store/reducer/project';
import infoReducer from './store/reducer/info';
import positiveReducer from './store/reducer/positivebox';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  infoReducer,
  projectReducer,
  positiveReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
        <App/>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

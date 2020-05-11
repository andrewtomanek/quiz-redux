import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import quizReducer from './store/reducers/quizReducer';

const store = createStore(
    quizReducer, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

const render = () => {
ReactDOM.render( app, document.getElementById('app-root'));
};

render();


if (module.hot) {
    module.hot.accept("./App", () => {
      render();
    });
  }
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from '@/store/store';

const render = (Component) => {
  ReactDOM.render(
    // 绑定 redux、热加载
    <AppContainer>
      <h1>haha</h1>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./index', () => {
    render()
  })
}
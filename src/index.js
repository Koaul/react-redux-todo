import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Store from './Store/store'
import 'antd/dist/antd.css';

ReactDOM.render(
<Provider store={Store}>
<App/>
</Provider>,
document.getElementById('root')
);
registerServiceWorker();

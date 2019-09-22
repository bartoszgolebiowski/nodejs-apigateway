import React from 'react';
import {Provider} from 'react-redux'
import Dashboard from './containers/Dashboard/Dashboard';
import store from './redux/store'

function App() {
    return (
        <Provider store={store}>
            <Dashboard/>
        </Provider>
    )
}

export default App;

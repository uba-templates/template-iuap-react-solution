import React from 'react';
import mirror, { render, Router } from 'tinper-mirrorx';
import { App } from 'containers';

import './index.less';

mirror.defaults({
    historyMode: 'hash'
});

const root = document.getElementById('app');

if (__DEV__) {
    console.log("现在是开发环境")
}

if (__PROD__) {
    console.log("现在是生产环境")
}

render(
<Router>
<App />
</Router>, root);

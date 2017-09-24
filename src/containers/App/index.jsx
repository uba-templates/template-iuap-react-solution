import {Component} from 'react';
import {Welcome, Menus, Header} from 'components';
import {Con, Icon} from 'tinper-bee';
import classnames from 'classnames';
import mirror, { connect, actions } from 'tinper-mirrorx';
import menuModel from 'model/menu';

import './index.less';

const App = (menuModel) => {
    return (
        <div style={{ height: '100%' }}>
            <div className={classnames("side-bar",{"toggled": menuModel.toggle})}>
                {
                    menuModel.toggle ? (
                        <Icon type="uf-iuap-col" className="nav-icon" />
                    ) : (
                        <img
                            src="//design.yonyoucloud.com/static/img/designer/logo.png"
                        />
                    )
                }

                <Menus />
            </div>
            <div className={classnames("content",{"toggled": menuModel.toggle})}>
                <Header />
                <Con fluid={true}>

                </Con>
            </div>
        </div>
    )

}

mirror.model(menuModel);


export default connect(({menuModel}) => menuModel)(App);
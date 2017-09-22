import {Component} from 'react';
import {Welcome, Menus, Header} from 'components';
import {Con, Icon} from 'tinper-bee';
import classnames from 'classnames';

import './index.less';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        const { toggle } = this.state;
        return (
            <div style={{ height: '100%' }}>
                <div className={classnames("side-bar",{"toggled": toggle})}>
                    {
                        toggle ? (
                            <Icon type="uf-iuap-col" className="nav-icon" />
                        ) : (
                            <img
                                src="//design.yonyoucloud.com/static/img/designer/logo.png"
                            />
                        )
                    }

                    <Menus toggle={ toggle } />
                </div>
                <div className={classnames("content",{"toggled": toggle})}>
                    <Header toggle={ toggle } onToggle={ this.handleToggle } />
                    <Con fluid={true}>

                    </Con>

                </div>
            </div>
        );
    }
}
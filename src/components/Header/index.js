import React, { Component } from 'react';
import { Navbar,FormControl, Badge, Icon,Menu } from 'tinper-bee';
import classnames from 'classnames';

import './index.less';

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;


class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded : false,
            current : 1
        }
    }
    onToggle(value) {
        this.setState({expanded:value});
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render(){
        const { toggle, onToggle } = this.props;
        return(
            <div className="header">
                <Navbar
                    expanded={this.state.expanded}
                    mode="horizontal"
                    onToggle={this.onToggle.bind(this)}
                    className="header-nav"
                    fluid={true}>
				   		<span className="toggle" >
								<Icon type="uf-navmenu" className={ classnames({"closed": toggle}) } onClick={ onToggle } />
						</span>

                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            <Badge dataBadge="4" colors="warning">
                                <Icon type="uf-bell" />
                            </Badge>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <Icon type="comments" />
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            <span>刘认华</span>
                        </NavItem>
                    </Nav>
                </Navbar>

            </div>
        )
    }
}



export default Header;

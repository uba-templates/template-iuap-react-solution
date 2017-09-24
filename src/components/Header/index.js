import React, { Component } from 'react';
import { Navbar,FormControl, Badge, Icon,Menu } from 'tinper-bee';
import classnames from 'classnames';
import { connect, actions } from 'tinper-mirrorx';

import './index.less';

const NavItem = Navbar.NavItem;
const Nav = Navbar.Nav;

const Header = (menuModel) => {

    return (
        <div className="header">
            <Navbar
                expanded={menuModel.expanded}
                mode="horizontal"
                onToggle={actions.menuModel.handleExtend}
                className="header-nav"
                fluid={true}>
				   		<span className="toggle" >
								<Icon
                                    type="uf-navmenu"
                                    className={ classnames({"closed": menuModel.toggle}) }
                                    onClick={ actions.menuModel.handleToggle } />
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
                        <span>小明</span>
                    </NavItem>
                </Nav>
            </Navbar>

        </div>
    )
}



export default connect(({ menuModel }) => menuModel)(Header);

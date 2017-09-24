import React, { Component } from 'react';
import { Navbar, Icon, Menu } from 'tinper-bee';
import mirror, { Link, actions, connect } from 'tinper-mirrorx';


import './index.less';

const SubMenu = Menu.SubMenu;

const Menus = ({menuModel}) => (
    <Menu onClick={(e) => {actions.menuModel.changeCurrentMenu(e.key)}}
                  selectedKeys={[menuModel.current]}
                  mode={menuModel.toggle ? "vertical" : "inline"}
            >
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="uf-9square-2" />
                        {menuModel.toggle ? "" : <span>菜单一</span>}
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/usermanager">
                        <Icon type="uf-userset" />
                        {menuModel.toggle ? "" : <span>菜单二</span>}
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub2"
                    title={<span><Icon type="uf-puzzle-o" />{menuModel.toggle ? "" : <span>菜单三</span>}</span>}>
                    <Menu.Item key="7">
                        <Link to="/datatable">
                            子菜单一
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to="/reference">
                            子菜单二
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
);





export default connect((menuModel) => {
    return menuModel;
})(Menus);

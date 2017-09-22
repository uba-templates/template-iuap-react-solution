import React, { Component } from 'react';
import { Navbar, Icon, Menu } from 'tinper-bee';
import { Link, actions } from 'tinper-mirrorx';

import
import './index.less';

const SubMenu = Menu.SubMenu;

const Menus = ({menu}) => (
    <Menu onClick={(e) => {actions.menu.changeCurrentMenu(e.key)}}
                  selectedKeys={[menu.current]}
                  mode={menu.toggle ? "vertical" : "inline"}
            >
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="uf-9square-2" />
                        {menu.toggle ? "" : <span>菜单一</span>}
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/usermanager">
                        <Icon type="uf-userset" />
                        {menu.toggle ? "" : <span>菜单二</span>}
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub2"
                    title={<span><Icon type="uf-puzzle-o" />{menu.toggle ? "" : <span>菜单三</span>}</span>}>
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

// class Menus extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             current: 1
//         }
//     }
//     handleClick(e) {
//         this.setState({
//             current: e.key,
//         });
//     }
//     render(){
//         const { toggle } = this.props;
//         return(
//             <Menu onClick={this.handleClick.bind(this)}
//                   defaultOpenKeys={['demo3sub1']}
//                   selectedKeys={[this.state.current]}
//                   mode={toggle ? "vertical" : "inline"}
//             >
//                 <Menu.Item key="1">
//                     <Link to="/">
//                         <Icon type="uf-9square-2" />
//                         {toggle ? "" : <span>菜单一</span>}
//                     </Link>
//                 </Menu.Item>
//                 <Menu.Item key="2">
//                     <Link to="/usermanager">
//                         <Icon type="uf-userset" />
//                         {toggle ? "" : <span>菜单二</span>}
//                     </Link>
//                 </Menu.Item>
//                 <SubMenu key="sub2" title={<span><Icon type="uf-puzzle-o" />{toggle ? "" : <span>菜单三</span>}</span>}>
//                     <Menu.Item key="7">
//                         <Link to="/datatable">
//                             子菜单一
//                         </Link>
//                     </Menu.Item>
//                     <Menu.Item key="8">
//                         <Link to="/reference">
//                             子菜单二
//                         </Link>
//                     </Menu.Item>
//                 </SubMenu>
//             </Menu>
//         )
//     }
// }


export default Menus;

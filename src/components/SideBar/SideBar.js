import React, {Component} from 'react';
import {Layout, Menu, Icon,Avatar} from 'antd';
import {Link} from 'react-router-dom';
const {Sider} = Layout;
class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCollapsed: true,
            color:'#d70900',
            user:'S',
            size:"large",
            shape:"circle"
        }
    }
    onCollapse=(isCollapsed)=>{
        this.setState({isCollapsed});
    }
    onMenuItemSelect =(item,key,selectedKeys)=>{

    }
    render() {
        return (
            <Sider collapsible collapsed={this.state.isCollapsed} onCollapse={this.onCollapse} >
            <div style={{height:'60px',justifyContent:'center',alignItems:"center",display:'flex'}} type="flex"><Avatar  icon="user" /></div>
                <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
                <Menu.Item key="1">
                <Link to='/newlog'>
                        <Icon type="edit"/>
                        <span>New Log</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Link to='/'><Icon type="file-text"/>
                        <span>Logs</span></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SideBar;
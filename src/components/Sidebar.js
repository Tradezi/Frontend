import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import '../styles/sidebar.css'

const Sidebar = () => {
    return(
        <ProSidebar>
            <SidebarHeader>
                Virtual Trader
            </SidebarHeader>
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem>Portfolio</MenuItem>
                <MenuItem>Stocks</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
                <div>
                    <p>Settings</p>
                    <p>Log Out</p>
                </div>
            </SidebarFooter>
        </ProSidebar>
    )
}

export default Sidebar


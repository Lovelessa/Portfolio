import React from 'react';
import {SidebarContainer, Icon, CloseIcon} from './sidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
               <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
               </SidebarMenu> 
            </SidebarWrapper>    
        </SidebarContainer>
    )
}

export default Sidebar

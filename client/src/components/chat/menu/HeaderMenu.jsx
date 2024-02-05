import React, { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import Drawer from '../drawer/Drawer';

const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;
// const MoreIcon = styled(MoreVert)`
//     cursor: pointer;
// `

const HeaderMenu = () => {

    const [open, setOpen] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => { }}>Profile</MenuOption>
                <MenuOption onClick={() => { }}>Logout
                    {/* { showlogoutButton ?
                    <Logout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onSignoutSuccess}
                    >
                    </Logout> : null
                } */}
                </MenuOption>
            </Menu>
            <Drawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default HeaderMenu
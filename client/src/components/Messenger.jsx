import React from 'react'
import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { AccountContext } from '../context/AccountProvider';

import LoginDialog from './accounts/LoginDialog';
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
  height: 100vh;
  background: #DCDCDC;
`

const LoginHeader = styled(AppBar)`
  background: #00bfa5;
  height: 200px;
  box-shadow: none;
`

const Header = styled(AppBar)`
  background: #00bfa5;
  height: 125px;
  box-shadow: none;
`

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {
         account ? 
         <>
             <Header>
                 <Toolbar></Toolbar>
             </Header>
             <ChatDialog />
         </>
         :
         <>
             <LoginHeader>
                 <Toolbar></Toolbar>
             </LoginHeader>
             <LoginDialog />
         </>
      }
    </Component>
  )
}

export default Messenger;
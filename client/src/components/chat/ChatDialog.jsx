import React, { useContext } from 'react'
import { Dialog, Box, styled} from '@mui/material';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import { AccountContext } from '../../context/AccountProvider';
import Chat from './chat/ChatBox';

const dialogStyle = {
  height: '100%',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '95%',
  borderRadius: 0,
  boxShadow: 'none',
  overflow: 'hidden',
  boxSizing: 'border-box',
  margin: '20px',
}
const Component = styled(Box)`
  display: flex;
  height: 100%;
`
const LeftComponent = styled(Box)`
  width: 30%;
  min-width: 300px;
  max-width: 450px;
`
const RightComponent = styled(Box)`
  width: 70%;
  min-width: 450px;
`

const ChatDialog = () => {
  const {person} = useContext(AccountContext);
  return (
    <Dialog
            open={true}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
      <Component>
        <LeftComponent>
          <Menu/>
        </LeftComponent>
        <RightComponent>
          {
            person ? <Chat user={person}/> : <EmptyChat/>
          }
        </RightComponent>
      </Component>
    </Dialog>
  )
}

export default ChatDialog
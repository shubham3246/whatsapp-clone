import React, { useContext } from 'react'
import { Dialog, Box, styled} from '@mui/material';


import EmptyChat from './chat/EmptyChat';
import { UserContext } from '../../context/UserProvider';
import ChatBox from './chat/ChatBox';
import Menu from './menu/Menu';


const dialogStyle = {
  height: '100%',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '95vh',
  borderRadius: 0,
  boxShadow: 'none',
  overflow: 'hidden',
  boxSizing: 'border-box',
  margin: '20px',
}
const Component = styled(Box)`
  display: flex;
  // height: 10vh;
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
  const {person} = useContext(UserContext);

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
            Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
          }
        </RightComponent>
      </Component>
    </Dialog>
  )
}

export default ChatDialog
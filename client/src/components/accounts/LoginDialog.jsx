import { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { jwtDecode } from 'jwt-decode';

import { qrCodeImage } from '../../constants/data';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api.js'; 

const dialogStyle = {
    height: '90%',
    width: '65%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 1,
    // boxShadow: 'none',
    overflow: 'hidden',
    padding: '72px',
    boxSizing: 'border-box',
}

const Component = styled(Box)`
    display: flex; 
    justify-content: space-between;
`;

const Container = styled(Box)``;

const QRCOde = styled('img')({
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const StyledElements = styled(Typography)`
    margin-left: 5px;
    color: #3b4a54;
    font-size: 17.5px;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 600;
`

const LoginDialog = () => {
    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwtDecode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
        // console.log("success", decoded);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <Dialog
            open={true}
            maxWidth={'md'}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop = {true}
        >
            <Component>
                <Container>
                    <Title>To use WhatsApp on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>
                            2. Tap <StyledElements>Menu Settings</StyledElements>
                            <MoreVert /> and select WhatsApp Web
                        </ListItem>
                        <ListItem>3. Tap Linked devices and then Link a device</ListItem>
                        <ListItem>4. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QRCOde src={qrCodeImage} alt="QR Code" />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(5%) translateY(-35%)' }}>
                        {
                            // showloginButton ?
                            <GoogleLogin
                                buttonText=""
                                onSuccess={onLoginSuccess}
                                onError={onLoginFailure}
                            />
                            // : null
                        }
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog
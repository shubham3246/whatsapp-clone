import './App.css';
import AccountProvider from './context/AccountProvider';
import UserProvider from './context/UserProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';

const clientId = "585995979554-605agfp4ktpp21epkalspopdahjhcbs0.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>

  );
}

export default App;

import './App.css';
import AccountProvider from './context/AccountProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';

const clientId = "585995979554-605agfp4ktpp21epkalspopdahjhcbs0.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>

  );
}

export default App;

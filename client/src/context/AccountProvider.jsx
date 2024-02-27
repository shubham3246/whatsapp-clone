import { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {

    const [ account, setAccount ] = useState();
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const [activeUsers, setActiveUsers] = useState([]);
    
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        console.log("going to glitch");
        socket.current = io('ws://localhost:5000');
        console.log("returning from glitch");
    }, [])

    return (
        <AccountContext.Provider value={{ 
            account, 
            setAccount, 
            showloginButton,
            setShowloginButton,
            showlogoutButton,
            setShowlogoutButton,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;

// import { Navbar, Sidebar } from "../components"
// import { Toaster } from 'react-hot-toast';
const pageID = '108679325425567'
import { MessengerChat } from "react-messenger-chat-plugin";
import { io } from 'socket.io-client'
import { useDispatch } from 'react-redux';
import { addMessage, addSocket } from '../redux/slices/slice';
import { useEffect } from "react";
import { useRouter } from 'next/router'
const endPoint = 'http://localhost:8000'
const appID = '501714114397260'
const alanKey = 'c411c68b1472d0c9b61616ccb9a09ec72e956eca572e1d8b807a3e2338fdd0dc/stage'
const Layout = ({ children }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    useEffect(() => {
        const alanBtn = require('@alan-ai/alan-sdk-web');
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                console.log({ command })
                if (command === 'introduce me') {
                    alert('i received command')
                }
                if (command === 'about page') {
                    router.push('/about')
                }
                if (command === 'go back') {
                    router.back()
                }
            }
        });
    }, []);
    useEffect(() => {
        var socket = io(endPoint)
        dispatch(addSocket({ socket }))
        console.log(socket);
        console.log('call');
        socket.on('inside socket', (resi) => {
            // dispatch(addMessage({ message: 'hello'}))
            // dispatch(addMessage({ message: resi.value }))
        })
        socket.on('outside socket', (reso) => {
            console.log({ reso })
        })
        return () => {
            socket.disconnect()
            console.log('socket.disconnect() xxx')
            // socket.off()
        }
    }, [])
    return (
        <>
            {children}
            < MessengerChat
                pageId={pageID}
                language="en_US"
                themeColor={"#00FFFF"}
                bottomSpacing={30}
                loggedInGreeting="Welcome to our Journey!!"
                loggedOutGreeting="Please login to continue !"
                greetingDialogDisplay={"fade"}
                debugMode={true}
                onMessengerShow={() => {
                    console.log("onMessengerShow");
                }
                }
                onMessengerHide={() => {
                    console.log("onMessengerHide");
                }}
                onMessengerDialogShow={() => {
                    console.log("onMessengerDialogShow");
                }}
                onMessengerDialogHide={() => {
                    console.log("onMessengerDialogHide");
                }}
                onMessengerMounted={() => {
                    console.log("onMessengerMounted");
                }}
                onMessengerLoad={() => {
                    console.log("onMessengerLoad");
                }}
            />
            {/* <Toaster />
            {showBars && (
                <Sidebar />
            )}
            <div >
                {showBars && (
                    <Navbar />
                )} */}
            {/* </div> */}
        </>
    )
}

export default Layout
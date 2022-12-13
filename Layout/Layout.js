// import { Navbar, Sidebar } from "../components"
// import { Toaster } from 'react-hot-toast';
const pageID = '108679325425567'
import { MessengerChat } from "react-messenger-chat-plugin";
const Layout = ({ children }) => {
    return (
        <>
            {children}

            < MessengerChat
                pageId={pageID}
                language="en_US"
                themeColor={"#000000"}
                bottomSpacing={30}
                loggedInGreeting="loggedInGreeting"
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
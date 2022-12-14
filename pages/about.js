import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getFirestore } from "firebase/firestore";
import { collection, doc, addDoc, setDoc, getDocs } from "firebase/firestore";
import app from '../firebase/firebase';
const about = () => {
    const db = getFirestore(app);
    const { socket, message } = useSelector((state) => state.adminState)
    const handleClick = async (e) => {
        e.preventDefault()
        await setDoc(doc(db, "data", "raju"), {
            first: "Ada",
            last: "Lovelace",
            born: 1819
        });
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1810
        });
        console.log("Document written with ID: ", docRef.id);
        const querySnapshot = await getDocs(collection(db, "users"));
        const data = querySnapshot.docs.map((doc) => {
            return doc.data()
        });
        console.log({ data: data });
        socket.emit('client', { id: 90, name: 'Raju kadel' })
    }
    return (
        <div className='h-screen w-screen bg-red-500 text-white text-2xl text-center'>
            {message && (
                <div>
                    <p className='p-4 text-2xl '>{message}</p>
                </div>
            )}
            <div className='bg-blue-500' onClick={handleClick}>
                Submit Me
            </div>
        </div>
    )
}
export default about
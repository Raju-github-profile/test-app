import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { getFirestore } from "firebase/firestore";
import { collection, doc, addDoc, setDoc, getDocs } from "firebase/firestore";
import app from '../firebase/firebase';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('Here is your toast.', {
    position: 'top-right',
    style: { backgroundColor: 'blue' }
    // backgroundColor: '#9c1d1d',
});
const about = () => {
    const db = getFirestore(app);
    const { socket, message, alanInstance } = useSelector((state) => state.adminState)
    const handleClick = async (e) => {
        console.log({ alanInstance })
        console.log('1')
        notify()
        alanInstance.playText('hello')
        // e.preventDefault()
        // await setDoc(doc(db, "data", "raju"), {
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1819
        // });
        // const docRef = await addDoc(collection(db, "users"), {
        //     first: "Ada",
        //     last: "Lovelace",
        //     born: 1810
        // });
        // console.log("Document written with ID: ", docRef.id);
        // const querySnapshot = await getDocs(collection(db, "users"));
        // const data = querySnapshot.docs.map((doc) => {
        //     return doc.data()
        // });
        // console.log({ data: data });
        // socket.emit('client', { id: 90, name: 'Raju kadel' })
        console.log('2')

    }
    return (
        <div
            className='h-screen pt-40 p-40  w-screen bg-red-500 text-white text-2xl text-center'>
            {message && (
                <div>
                    <p className='p-4 text-2xl '>{message}</p>
                </div>
            )}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='bg-blue-500 p-3 w-40 hover:cursor-pointer' onClick={handleClick}>
                Submit Me
            </motion.div>
            <motion.div
                className='mt-20 '
                layout style={{ borderRadius: 20 }}
            >
                Hello
            </motion.div>
        </div>
    )
}
export default about
import { initializeApp, getApp } from "firebase/app";

function initializeAppIfNecessary() {
    try {
        return getApp();
    } catch (any) {
        const firebaseConfig = {
            apiKey: "AIzaSyANDHL7MEvD-wcGyy0AFCC1mtd1lu-FrOU",
            authDomain: "hackathon-app-11857.firebaseapp.com",
            projectId: "hackathon-app-11857",
            storageBucket: "hackathon-app-11857.appspot.com",
            messagingSenderId: "978420359868",
            appId: "1:978420359868:web:57a0a55820da8a2fdae6b9"
          };
        return initializeApp(firebaseConfig);
    }
}

const app = initializeAppIfNecessary();
export default app;
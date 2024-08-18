import { FirebaseApp, getApp, getApps, initializeApp } from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDftOOnuAHUShYfApXxn60maYF8lp-_Pk8",
    authDomain: "safesync-ai.firebaseapp.com",
    projectId: "safesync-ai",
    storageBucket: "safesync-ai.appspot.com",
    messagingSenderId: "678602401241",
    appId: "1:678602401241:web:43f8adab416339042625c8",
    measurementId: "G-47WZ8L3Y1B"
};

let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

export { app }
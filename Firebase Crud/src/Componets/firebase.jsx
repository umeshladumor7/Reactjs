import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
     apiKey: "AIzaSyCdmUZd53zTGHP38wJIVcY64H5wowORKr4",
     authDomain: "fir-e54b1.firebaseapp.com",
     projectId: "fir-e54b1",
     storageBucket: "fir-e54b1.appspot.com",
     messagingSenderId: "425321296146",
     appId: "1:425321296146:web:52bf6855595b717bbc83cb",
     measurementId: "G-1KENM15ZP8"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
export const imgdb = getStorage(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwuGscn_PqfZfjyTGaUpkSADp3az1xLSE",
  authDomain: "facebook-bd611.firebaseapp.com",
  projectId: "facebook-bd611",
  storageBucket: "facebook-bd611.appspot.com",
  messagingSenderId: "833381061337",
  appId: "1:833381061337:web:ee16a5da504d6a8a7c24c8",
};

const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const storage = getStorage(app);

export { database, storage };

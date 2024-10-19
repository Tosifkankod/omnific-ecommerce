// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCsJFruVZnNPJlaxfB-p_HC-cQojKsbPBg",
//   authDomain: "omnificstore.firebaseapp.com",
//   projectId: "omnificstore",
//   storageBucket: "omnificstore.appspot.com",
//   messagingSenderId: "829994197783",
//   appId: "1:829994197783:web:a7155662b92079abcbcd52",
//   measurementId: "G-0GNDHRT7L1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const firebaseConfig = {
//   apiKey: "AIzaSyCsJFruVZnNPJlaxfB-p_HC-cQojKsbPBg",
//   authDomain: "omnificstore.firebaseapp.com",
//   projectId: "omnificstore",
//   storageBucket: "omnificstore.appspot.com",
//   messagingSenderId: "829994197783",
//   appId: "1:829994197783:web:a7155662b92079abcbcd52",
//   measurementId: "G-0GNDHRT7L1"
// };

// export default firebaseConfig;

// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCsJFruVZnNPJlaxfB-p_HC-cQojKsbPBg",
  authDomain: "omnificstore.firebaseapp.com",
  projectId: "omnificstore",
  storageBucket: "omnificstore.appspot.com",
  messagingSenderId: "829994197783",
  appId: "1:829994197783:web:a7155662b92079abcbcd52",
  measurementId: "G-0GNDHRT7L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

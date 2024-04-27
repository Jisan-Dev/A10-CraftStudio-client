// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLwhNVOjFWjKYALzTzE4kktAzgcw2w52U',
  authDomain: 'a10-craft-studio.firebaseapp.com',
  projectId: 'a10-craft-studio',
  storageBucket: 'a10-craft-studio.appspot.com',
  messagingSenderId: '154346072299',
  appId: '1:154346072299:web:6225ee956ca07ee556f6ae',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
